import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IDefaultState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IItem>) => {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<IItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice -= action.payload.price;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

type IDefaultState = {
  items: IItem[];
  totalPrice: number;
};
