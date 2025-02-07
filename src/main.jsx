import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { RuterComponent } from "./router";
import MainContext from "./context/maincontext";

createRoot(document.getElementById("root")).render(
  <MainContext>
    <RouterProvider router={RuterComponent} />
  </MainContext>
);
