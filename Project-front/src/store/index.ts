import { configureStore } from "@reduxjs/toolkit";
import CategoriesReducer from "./Categories/CategoriesSlice";
import ProductsReducer from "./Products/ProductsSlice";
// ...

export const store = configureStore({
  reducer: {
    CategoriesReducer,
    ProductsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
