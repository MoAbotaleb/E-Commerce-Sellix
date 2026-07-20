import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CategoriesReducer from "./Categories/CategoriesSlice";
import ProductsReducer from "./Products/ProductsSlice";
import CartReducer from "./Cart/CartSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/es/storage";


// const rootPersistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["CartReducer"],
// };
const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  CategoriesReducer,
  ProductsReducer,
  CartReducer: persistReducer(cartPersistConfig, CartReducer),
});

// const persistedReducer = persistReducer(cartPersistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
