import type { RootState } from "@/store";
import type {  IProduct } from "@/types/ProductTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
export const actGetProductFullInfo = createAsyncThunk(
  "Cart/GetProductsInfo",
  async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { CartReducer } = getState() as RootState;
    const items = Object.entries(CartReducer.items);
    if (items.length === 0) {
      return [];
    }
    let concatendedItemId: string = items.map(([id]) => `id=${id}`).join("&");

    try {
      const sender = await axios.get<IProduct[]>(
        `/products?${concatendedItemId}`,
      );
      const data = sender.data;

     
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error?.message);
      } else {
        return "un expected error";
      }
    }
  },
);
