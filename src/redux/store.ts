import { configureStore } from '@reduxjs/toolkit';
import ItemReducer from './item';
import NotificationReducer from './notification/notification';

export const store = configureStore({
  reducer: {
    items: ItemReducer,
    notification: NotificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
