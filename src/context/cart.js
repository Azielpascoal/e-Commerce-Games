import React, { createContext, useState, useEffect, useContext } from "react";

const cartContext = createContext();
export default function cartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalvalue, setTotalValue] = useState();
  const add = ({ item }) => {
    const newCart = cart;
    newCart.push(item);
    setCart(item);
  };
  const store = {
    add,
    cart,
    totalvalue,
  };
  return <cartContext.Provider value={store}>{children}</cartContext.Provider>;
}
export function useCart() {
  const context = useContext(cartContext);
  const { add, cart, totalvalue } = context;
  return {
    add,
    cart,
    totalvalue,
  };
}
