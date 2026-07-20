import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";
const actGetCategories = createAsyncThunk(
  "Categories/actGetCategories",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const data = await axios.get("/categories");

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
export default actGetCategories;
