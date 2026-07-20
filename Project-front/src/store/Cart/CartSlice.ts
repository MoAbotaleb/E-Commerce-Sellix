import type { IProduct } from "@/types/ProductTypes";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";

interface IinitialState {
  items: { [key: number]: number };
  ProductFullInfo: IProduct[];
}
const initialState: IinitialState = {
  items: {},
  ProductFullInfo: [],
};
const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    
    },
  },
});


export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
