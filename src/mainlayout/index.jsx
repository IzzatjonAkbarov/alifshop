import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import LinksArea from "../components/LinksArea";

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
        <LinksArea />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
