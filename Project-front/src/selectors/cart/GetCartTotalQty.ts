import type { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

export const GetCartTotalQty = createSelector(
  (state: RootState) => state.CartReducer.items,
  (items) => {
    return Object.values(items).reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  },
);

