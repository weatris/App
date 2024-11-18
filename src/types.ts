export interface Item {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments: number[];
}
export type commentType = {
  id: number;
  productId: number;
  description: string;
  date: string;
};

export type notificationMessageType = 'alert' | 'success' | 'error' | 'info';

export type notificationType = {
  id?: string;
  title: string;
  subtitle?: string;
  type?: notificationMessageType;
};
