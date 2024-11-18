import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { ItemSlice } from './item';
import { NotificationSlice } from './notification/notification';

export const useStateProvider = () => {
  const dispatch = useDispatch();
  return {
    state: {
      items: useSelector((state: RootState) => state.items),
      notification: useSelector((state: RootState) => state.notification),
    },
    actions: bindActionCreators(
      {
        ...ItemSlice.actions,
        ...NotificationSlice.actions,
      },
      dispatch,
    ),
  };
};
