import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
const actGetProductsByCatPerfix = createAsyncThunk(
  "Products/actGetProductsByCatPerfix",
  async (prefix: string, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const data = await axios.get(
        `/products/?cat_prefix=${prefix}`,
      );

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
export default actGetProductsByCatPerfix;
