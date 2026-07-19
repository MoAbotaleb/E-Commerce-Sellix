import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import type { TLoading } from "@/types/shared";
import type { IProduct } from "@/types/ProductTypes";
import actGetProductsByCatPerfix from "./act/actGetProductsByCatePerfix";

// interfaces

interface IProductsState {
  allRecords: IProduct[];
  RecordsByPrefix: IProduct[];
  loading: TLoading;
  error: string | null;
}
// end interfaces

const initialState: IProductsState = {
  allRecords: [],
  RecordsByPrefix: [],
  loading: "idle",
  error: null,
};

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    CleanUpRecordsByPrefix: (state) => {
      state.RecordsByPrefix = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.allRecords = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
      // or
      // state.error=action.payload as string;
    });
    builder.addCase(actGetProductsByCatPerfix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actGetProductsByCatPerfix.fulfilled, (state, action) => {
      state.RecordsByPrefix = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(actGetProductsByCatPerfix.rejected, (state, action) => {
      state.loading = "failed";
     state.error = action.payload as string;
      // or
      // state.error=action.payload as string;
    });
  },
});

export const { CleanUpRecordsByPrefix } = ProductsSlice.actions;
export default ProductsSlice.reducer;
