import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../types';
import { comments, initialItems } from './mock';

export const ItemSlice = createSlice({
  name: 'Item',
  initialState: {
    items: initialItems,
    comments,
  },
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const itemToUpdate = action.payload;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id == itemToUpdate.id) {
            return itemToUpdate;
          }
          return item;
        }),
      };
    },
  },
});

export default ItemSlice.reducer;
