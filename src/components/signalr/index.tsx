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


import useAppDispatch from '@/hooks/use-app-dispatch';
import useAppSelector from '@/hooks/use-app-selector';
import useTypedSession from '@/hooks/use-typed-session';
import {
  addNewToNotifications,
  setNotifications,
} from 'core/store/notifications';
import environment from '@/utils/environment';
import { NotificationDto, enhancedApi } from 'core/api/enhancedApi';

interface HubContextValues {
  hubConnection?: HubConnection;
  unreadNotifications: boolean;
}

const initialContext: HubContextValues = {
  unreadNotifications: false,
};

export const HubContext = createContext<HubContextValues>(initialContext);

const HubProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { allowNotifications, notifications } = useAppSelector(
    (state) => state.notifications,
  );
  const dispatch = useAppDispatch();

  const { data: sessionData, status } = useTypedSession();
  const accessToken = sessionData?.accessToken;

  const [unreadNotifications, setUnreadNotifications] = useState(false);
  const [socketState, setSocketState] = useState<HubConnection>();

  const [getNotifications] = enhancedApi.useLazyGetUsersNotificationsQuery();

  useEffect(() => {
    if (status !== 'authenticated') {
      if (notifications.length) dispatch(setNotifications([]));

      return undefined;
    }

    if (socketState && allowNotifications) {
      getNotifications()
        .unwrap()
        .then((response) => {
          dispatch(setNotifications(response ?? []));
        })
        .finally(() => {
          socketState?.on(
            'ReceiveNotification',
            (notification: NotificationDto) => {
             console.log(notification, '2')

              dispatch(addNewToNotifications(notification));
            },
          );
        });
    }

    return () => socketState?.off('ReceiveNotification');
  }, [socketState, status, allowNotifications]);

  useEffect(() => {
    if (!accessToken) return undefined;

    const connection = new HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}/hubs/main`, {
        accessTokenFactory: () => accessToken,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.None)
      .build();

    connection
      .start()
      .then(() => {
        connection.on('ReceiveNotification', (notification: NotificationDto) => {
          console.log(notification, '1')
          setUnreadNotifications(true);
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
      unreadNotifications,
    };
  }, [
    socketState,
    unreadNotifications,
  ]);

  return (
    <HubContext.Provider value={contextValue}>{children}</HubContext.Provider>
  );
};

export default HubProvider;
