import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IDefaultState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    checkout: () => {
      return initialState;
    },
    addToCart: (state, action: PayloadAction<IItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += action.payload.price;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalPrice += action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<IItem>) => {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].quantity === 1) {
          state.totalPrice -= state.items[existingItemIndex].price;
          state.items.splice(existingItemIndex, 1);
        } else {
          state.items[existingItemIndex].quantity -= 1;
          state.totalPrice -= state.items[existingItemIndex].price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

type IDefaultState = {
  items: ICartItem[];
  totalPrice: number;
};
