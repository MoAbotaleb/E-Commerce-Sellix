import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Provider } from "react-redux";
import store from "./store/index";
import actGetCategories from "./store/Categories/act/actGetCategories";
import actGetProducts from "./store/Products/act/actGetProducts";

store.dispatch(actGetCategories());
store.dispatch(actGetProducts());
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <TooltipProvider>
      <AppRouter />
    </TooltipProvider>
  </Provider>,
);
