import { notificationMessageType } from '../../types';
import { generateRandomId } from '../../utils';
import { useStateProvider } from '../useStateProvider';

export const useNotification = () => {
  const { state, actions } = useStateProvider();
  const { notifications } = state.notification;
  const { addNotification: addNotificationState, removeNotification } = actions;

  const addNotification = ({
    title,
    tp = 'info',
    subtitle = '',
    lifetime = 3000,
  }: {
    title: string;
    tp?: notificationMessageType;
    subtitle?: string;
    lifetime?: number;
  }) => {
    const id = generateRandomId(6);

    addNotificationState({
      id,
      title,
      subtitle,
      type: tp,
    });

    setTimeout(() => {
      removeNotification(id);
    }, lifetime);
  };

  return { notifications, addNotification };
};
