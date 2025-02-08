import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { RuterComponent } from "./router";
import { ShopContextProvider } from "./context/addtocartcontext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <RouterProvider router={RuterComponent} />
    <ToastContainer />
  </ShopContextProvider>
);
