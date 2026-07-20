import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
const actGetProducts = createAsyncThunk(
  "Products/actGetProducts",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const data = await axios.get("/products");

      return data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("unexpected error");
      }
    }
  },
);
export default actGetProducts;
