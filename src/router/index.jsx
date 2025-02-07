import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainlayout";
import LikesPage from "../pages/likes";
import CartPage from "../pages/cart";
import HomePage from "../pages/home";
export const RuterComponent = createBrowserRouter([
  {
    path: "/",

    element: <MainLayout />,
    children: [
      {
        path: "/likes",
        Component: LikesPage,
        title: "Likes",
      },
      {
        path: "/cart",
        Component: CartPage,
        title: "Cart",
      },
      {
        path: "/",
        Component: HomePage,
        title: "HomePage",
      },
    ],
  },
]);
