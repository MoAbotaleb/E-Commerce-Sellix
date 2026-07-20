import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Provider } from "react-redux";
import store, { persistor } from "./store/index";
import actGetCategories from "./store/Categories/act/actGetCategories";
import actGetProducts from "./store/Products/act/actGetProducts";
import { PersistGate } from "redux-persist/integration/react";
import "@/services/axios-global.ts"
store.dispatch(actGetCategories());
store.dispatch(actGetProducts());
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TooltipProvider>
        <AppRouter />
      </TooltipProvider>
    </PersistGate>
  </Provider>,
);
