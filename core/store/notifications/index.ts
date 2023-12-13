import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationDto } from 'core/api/baseApi';


export interface NotificationsState {
  allowNotifications: boolean;
  isInitialized: boolean;
  nextPageToken: number | null;
  notifications: NotificationDto[];
}

const initialState: NotificationsState = {
  allowNotifications: false,
  isInitialized: false,
  nextPageToken: null,
  notifications: [],
};

const combineNotifications = (
  prev: NotificationDto[],
  next: NotificationDto[],
) => {
  const ids = new Set(prev.map(({ id }) => id));

  return [...prev, ...next.filter(({ id }) => !ids.has(id))];
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setAllowNotifications: (state, action: PayloadAction<boolean>) => {
      state.allowNotifications = action.payload;
    },

    setNextPageToken: (state, action: PayloadAction<number | null>) => {
      state.nextPageToken = action.payload;
    },

    setNotifications: (state, action: PayloadAction<NotificationDto[]>) => {
      state.notifications = action.payload;
      state.isInitialized = true;
    },

    addNewToNotifications: (state, action: PayloadAction<NotificationDto>) => {
      state.notifications.unshift(action.payload);
    },

    addMultipleToNotifications: (
      state,
      action: PayloadAction<NotificationDto[]>,
    ) => {
      state.notifications = combineNotifications(
        state.notifications,
        action.payload,
      );
    },

    readNotification: (state, action: PayloadAction<number>) => {
      const notification = state.notifications.find(
        (n) => action.payload === n.id,
      );

      if (notification) notification.isRead = true;
    },
  },
});

export const {
  setAllowNotifications,
  setNextPageToken,
  setNotifications,
  addNewToNotifications,
  addMultipleToNotifications,
  readNotification,
} = notificationsSlice.actions;

const notificationsReducer = notificationsSlice.reducer;

export default notificationsReducer;
