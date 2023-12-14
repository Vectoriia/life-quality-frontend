import {
    configureStore,
    combineReducers,
    ThunkAction,
    Action,
    isRejectedWithValue,
    Middleware,
  } from '@reduxjs/toolkit';
  import { createWrapper } from 'next-redux-wrapper';
  
  import environment from '@/utils/environment';
  
  import uiReducer from './ui';
  import notificationsReducer from './notifications';
  import { enhancedApi } from 'core/api/enhancedApi';
  import toast from 'react-hot-toast';
  
  const combinedReducer = combineReducers({
    [enhancedApi.reducerPath]: enhancedApi.reducer,
    ui: uiReducer,
    notifications: notificationsReducer,
  });
  
  export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      if (action.payload.status !== 401) {
        toast.error(action.payload.data?.message || action.payload.error);
      }
    }
  
    return next(action);
  };
  
  export const makeStore = () =>
    configureStore({
      reducer: combinedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
          .concat(enhancedApi.middleware)
          .concat(rtkQueryErrorLogger),
    });

  export const store = makeStore();
  
  type Store = ReturnType<typeof makeStore>;
  
  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
  // setupListeners(store.dispatch);
  
  export type AppDispatch = Store['dispatch'];
  export type RootState = ReturnType<Store['getState']>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;
  
  export const wrapper = createWrapper(makeStore, {
    debug: environment.isLocal,
  });
  