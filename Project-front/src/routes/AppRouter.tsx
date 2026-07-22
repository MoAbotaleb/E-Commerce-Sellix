import MainLayout from "@/layouts/MainLayout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import Categories from "@/pages/Categories";
import ProductsByPrefix from "@/pages/ProductsByPrefix";
import AboutUs from "@/pages/AboutUs";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Error from "@/pages/Error";
import ShoppingCart from "@/pages/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },

      {
        path: "categories/products/:prefix",
        element: <ProductsByPrefix />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Categories not found",
              status: 400,
            });
            // or
            //  throw new Response(null, {

            //   status: 400,
            // });
          }

          return true;
        },
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
