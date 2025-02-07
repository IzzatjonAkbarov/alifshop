import React from "react";
import AddtoCartContextProvider from "../addtocartcontext";

const MainContext = ({ children }) => {
  return <AddtoCartContextProvider>{children}</AddtoCartContextProvider>;
};

export default MainContext;
