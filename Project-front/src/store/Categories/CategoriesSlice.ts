import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import type { TLoading } from "@/types/shared";
import type { ICategory } from "@/types/CategoryTypes";

// interfaces

interface ICategoriesState {
  records: ICategory[];
  loading: TLoading;
  error: string | null;
}
// end interfaces

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const CategoriesSlice = createSlice({
  name: "Categories",
  initialState,
  reducers: {
    insert: (state, action) => {
      state.records.push = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.records = action.payload;
      state.loading = "succeeded";
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
      // or
      // state.error=action.payload as string;
    });
  },
});

export default CategoriesSlice.reducer;
