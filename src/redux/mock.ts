import { commentType, Item } from '../types';

export const initialItems: Item[] = [
  {
    id: 1,
    imageUrl: '/cat.jpg',
    name: 'Item One',
    count: 10,
    size: {
      width: 15,
      height: 20,
    },
    weight: '500g',
    comments: [101, 102],
  },
  {
    id: 2,
    imageUrl: '/cat.jpg',
    name: 'Item Two',
    count: 5,
    size: {
      width: 30,
      height: 25,
    },
    weight: '1kg',
    comments: [201, 202],
  },
  {
    id: 3,
    imageUrl: '/cat.jpg',
    name: 'Item Three',
    count: 20,
    size: {
      width: 10,
      height: 15,
    },
    weight: '250g',
    comments: [301, 302],
  },
  {
    id: 4,
    imageUrl: '/cat.jpg',
    name: 'Item Four',
    count: 8,
    size: {
      width: 40,
      height: 30,
    },
    weight: '2kg',
    comments: [401, 402],
  },
  {
    id: 5,
    imageUrl: '/cat.jpg',
    name: 'Item Five',
    count: 15,
    size: {
      width: 20,
      height: 20,
    },
    weight: '750g',
    comments: [501, 502],
  },
];

export const comments: commentType[] = [
  {
    id: 101,
    productId: 1,
    description: 'Great quality!',
    date: '14:00 22.08.2021',
  },
  {
    id: 102,
    productId: 1,
    description: 'Value for money.',
    date: '10:30 23.08.2021',
  },
  {
    id: 201,
    productId: 2,
    description: 'Satisfactory performance.',
    date: '11:00 24.08.2021',
  },
  {
    id: 202,
    productId: 2,
    description: 'Would buy again.',
    date: '09:15 25.08.2021',
  },
  {
    id: 301,
    productId: 3,
    description: 'Compact and useful.',
    date: '15:45 26.08.2021',
  },
  {
    id: 302,
    productId: 3,
    description: 'Perfect for travel.',
    date: '08:30 27.08.2021',
  },
  {
    id: 401,
    productId: 4,
    description: 'Excellent durability.',
    date: '12:00 28.08.2021',
  },
  {
    id: 402,
    productId: 4,
    description: 'Highly recommended.',
    date: '14:20 29.08.2021',
  },
  {
    id: 501,
    productId: 5,
    description: 'Nice design.',
    date: '16:10 30.08.2021',
  },
  {
    id: 502,
    productId: 5,
    description: 'Good functionality.',
    date: '17:00 31.08.2021',
  },
];
