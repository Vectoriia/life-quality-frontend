import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from '@microsoft/signalr';
import React, {
  createContext,
  PropsWithChildren,
  useState,
  useMemo,
  useEffect,
} from 'react';


import { NOTIFICATIONS_PAGE_SIZE } from '@config/constants';
import useAppDispatch from '@hooks/use-app-dispatch';
import useAppSelector from '@hooks/use-app-selector';
import useTypedSession from '@hooks/use-typed-session';
import {
  addNewToNotifications,
  setNextPageToken,
  setNotifications,
} from '@store/notifications';
import environment from '@utils/environment';

interface HubContextValues {
  hubConnection?: HubConnection;
  requestedPaymentsCount: number;
  unreadMessagesCount: number;
  unreadNotificationsCount: number;
}

const initialContext: HubContextValues = {
  requestedPaymentsCount: 0,
  unreadMessagesCount: 0,
  unreadNotificationsCount: 0,
};

export const HubContext = createContext<HubContextValues>(initialContext);

const HubProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { allowNotifications, notifications } = useAppSelector(
    (state) => state.notifications,
  );
  const dispatch = useAppDispatch();

  const { data: sessionData, status } = useTypedSession();
  const accessToken = sessionData?.accessToken;

  const [requestedPaymentsCount, setRequestedPaymentsCount] = useState(0);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState(0);
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0);
  const [socketState, setSocketState] = useState<HubConnection>();

  const { data: requestedPaymentsCountData } =
    useGetPendingNotificationCountQuery(undefined, { skip: !accessToken });
  const { data: unreadMessagesCountData } = useGetTotalUnreadCountQuery(
    undefined,
    { skip: !accessToken },
  );
  const { data: unreadNotificationsCountData } =
    useGetUnreadNotificationCountQuery(undefined, { skip: !accessToken });
  const [getNotifications] = chefApi.useLazyGetUserNotificationsQuery();

  useEffect(() => {
    if (requestedPaymentsCountData) {
      setRequestedPaymentsCount(requestedPaymentsCountData.count);
    }
  }, [requestedPaymentsCountData]);

  useEffect(() => {
    if (unreadMessagesCountData) {
      setUnreadMessagesCount(unreadMessagesCountData.totalUnreadMessagesCount);
    }
  }, [unreadMessagesCountData]);

  useEffect(() => {
    if (unreadNotificationsCountData) {
      setUnreadNotificationsCount(unreadNotificationsCountData.count);
    }
  }, [unreadNotificationsCountData]);

  useEffect(() => {
    if (status !== 'authenticated') {
      if (notifications.length) dispatch(setNotifications([]));

      return undefined;
    }

    if (socketState && allowNotifications) {
      getNotifications({ pageSize: NOTIFICATIONS_PAGE_SIZE })
        .unwrap()
        .then(({ nextPageData, nextPageToken }) => {
          dispatch(setNotifications(nextPageData ?? []));
          dispatch(setNextPageToken(nextPageToken ?? null));
        })
        .finally(() => {
          socketState?.on(
            'ReceiveInAppNotification',
            (notification: NotificationDto) => {
              dispatch(addNewToNotifications(notification));
            },
          );
        });
    }

    return () => socketState?.off('ReceiveInAppNotification');
  }, [socketState, status, allowNotifications]);

  useEffect(() => {
    if (!accessToken) return undefined;

    const connection = new HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}/hubs/chat`, {
        accessTokenFactory: () => accessToken,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.None)
      .build();

    connection
      .start()
      .then(() => {
        connection.on(
          'ReceivePendingPaymentsCount',
          (requested: UnreadCountDto) => {
            setRequestedPaymentsCount(requested.totalUnreadMessagesCount);
          },
        );
        connection.on('ReceiveUnreadCount', (unread: UnreadCountDto) => {
          setUnreadMessagesCount(unread.totalUnreadMessagesCount);
        });
        connection.on('ReceiveUnreadNotificationCount', (unread: CountDto) => {
          setUnreadNotificationsCount(unread.count);
        });
        setSocketState(connection);
      })
      .catch(() => {
        setSocketState(undefined);
      });

    return () => {
      connection.stop();
    };
  }, [accessToken]);

  const contextValue: HubContextValues = useMemo(() => {
    return {
      hubConnection: socketState,
      requestedPaymentsCount,
      unreadMessagesCount,
      unreadNotificationsCount,
    };
  }, [
    socketState,
    requestedPaymentsCount,
    unreadMessagesCount,
    unreadNotificationsCount,
  ]);

  return (
    <HubContext.Provider value={contextValue}>{children}</HubContext.Provider>
  );
};

export default HubProvider;
