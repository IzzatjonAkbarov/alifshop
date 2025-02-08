import { createContext, useReducer } from "react";
const ShopContext = createContext({});
const ShopContextProvider = ({ children }) => {
  const initialState = {
    shop: JSON.parse(localStorage.getItem("shop")) || [],
    like: JSON.parse(localStorage.getItem("like")) || [],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        if (state.shop.find((value) => value.id === action.product.id)) {
          let newData = state.shop.map((value) =>
            value.id === action.product.id
              ? { ...value, counter: value.counter + 1 }
              : value
          );
          localStorage.setItem("shop", JSON.stringify(newData));
          return { ...state, shop: newData };
        }
        let newData = {
          ...state,
          shop: [...state.shop, { ...action.product, counter: 1 }],
        };
        localStorage.setItem("shop", JSON.stringify(newData.shop));
        return newData;
      case "delete":
        let deletedData = state.shop.filter(
          (value) => value.id !== action.deletedId
        );
        localStorage.setItem("shop", JSON.stringify(deletedData));
        return { ...state, shop: deletedData };
      case "increaseTheCount":
        let newDataForIncreasingCount = state.shop.map((value) =>
          value.id === action.product.id
            ? { ...value, counter: value.counter + 1 }
            : value
        );
        localStorage.setItem("shop", JSON.stringify(newDataForIncreasingCount));
        return { ...state, shop: newDataForIncreasingCount };
      case "decreaseTheCount":
        let newDataForDecreasingCount = state.shop.map((value) =>
          value.id === action.product.id
            ? { ...value, counter: value.counter - 1 }
            : value
        );
        localStorage.setItem("shop", JSON.stringify(newDataForDecreasingCount));
        return { ...state, shop: newDataForDecreasingCount };
      case "addtolike":
        if (state.like.find((value) => value.id === action.product.id)) {
          let newDataForlike = state.like.map((value) =>
            value.id === action.product.id
              ? { ...value, counter: value.counter + 1 }
              : value
          );
          localStorage.setItem("like", JSON.stringify(newDataForlike));
          return { ...state, like: newDataForlike };
        }
        let newDataForlike = {
          ...state,
          like: [...state.like, { ...action.product, counter: 1 }],
        };
        localStorage.setItem("like", JSON.stringify(newDataForlike.like));
        return newDataForlike;
      case "deletefromlike":
        let deletedDataFromLike = state.like.filter(
          (value) => value.id !== action.deletedId
        );
        localStorage.setItem("like", JSON.stringify(deletedDataFromLike));
        return { ...state, like: deletedDataFromLike };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};
export { ShopContextProvider, ShopContext };
