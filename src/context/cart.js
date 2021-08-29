import React, { createContext, useState, useEffect, useContext } from "react";

const cartContext = createContext();

export default function cartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalvalue, setTotalValue] = useState();
  useEffect(() => {
    let value = 0;
    cart.map((item) => {
      value = value + item.price;
      setTotalValue(value);
    });
    console.log(cart);
  }, [cart]);
  const add = ({ item }) => {
    const newCart = cart;
    newCart.push(item);
    setCart([...newCart]);
  };
  const remove = ({ index }) => {
    let newCart = cart.filter((item, i) => i !== index);
    setCart([...newCart]);
  };
  const store = {
    add,
    remove,
    cart,
    totalvalue,
  };
  return <cartContext.Provider value={store}>{children}</cartContext.Provider>;
}
export function useCart() {
  const context = useContext(cartContext);
  const { add, remove, cart, totalvalue } = context;
  return {
    add,
    remove,
    cart,
    totalvalue,
  };
}
