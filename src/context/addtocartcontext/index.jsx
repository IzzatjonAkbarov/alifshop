import { createContext, useState } from "react";

export const addtocartcontext = createContext();
import React from "react";

const AddtoCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <addtocartcontext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </addtocartcontext.Provider>
  );
};

export default AddtoCartContextProvider;
