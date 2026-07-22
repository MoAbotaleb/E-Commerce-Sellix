import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { actGetProductFullInfo } from "./act/actGetProductsFullInfo";
import type { TLoading } from "@/types/shared";
import type { IProduct } from "@/types/ProductTypes";

interface IinitialState {
  items: { [key: number]: number };
  ProductsFullInfo: IProduct[];
  loading: TLoading;
  error: string | null;
}
const initialState: IinitialState = {
  items: {},
  ProductsFullInfo: [],
  loading: "idle",
  error: null,
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
    removeFromCart: (state, action) => {
      const data = { ...state.items };
      delete data[action.payload];
      state.items = data;
      state.ProductsFullInfo = state.ProductsFullInfo.filter(
        (x) => x.id !== action.payload,
      );
    },
    removeFromProductFullInfo: (state, action: PayloadAction<number>) => {
      state.ProductsFullInfo = state.ProductsFullInfo.filter(
        (x) => x.id !== action.payload,
      );
    },
    editItemQty: (
      state,
      action: PayloadAction<{ id: number; qty: number }>,
    ) => {
      const newitem = { ...state.items };
      newitem[action.payload.id] = action.payload.qty;
      state.items = newitem;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductFullInfo.pending, (state, action) => {
      state.ProductsFullInfo = [];
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductFullInfo.fulfilled, (state, action) => {
      state.ProductsFullInfo = action.payload as IProduct[];
      state.loading = "succeeded";
    });
    builder.addCase(actGetProductFullInfo.rejected, (state, action) => {
      state.ProductsFullInfo = [];
      state.error = action.payload as string;
      state.loading = "failed";
    });
  },
});

export const { addToCart, removeFromCart, editItemQty,removeFromProductFullInfo } = CartSlice.actions;
export default CartSlice.reducer;
