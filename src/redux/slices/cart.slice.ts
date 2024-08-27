import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CartAddState {
  id: string | number;
  name: string;
  info: string;
  image: string;
}

interface CartRemoveState {
  id: string | number;
}

const initialState: CartAddState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartAddState>) => {
      const { id } = action.payload;
      if (
        state.length === 0 ||
        state.filter((item) => item.id === id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<CartRemoveState>) => {
      const { id } = action.payload;
      if (state.some((item) => item.id === id)) {
        return state.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
