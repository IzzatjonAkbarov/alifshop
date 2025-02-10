import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import LinksArea from "../components/LinksArea";
import FormComponent from "../components/FormComponent";

const MainLayout = () => {
  return (
    <>
      <header>
        <Header />
        <div className="hidden px-4  max-[600px]:flex max-[600px]:w-[100%] py-2">
          <FormComponent />
        </div>
        <LinksArea />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
