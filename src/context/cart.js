import React, { createContext, useState, useEffect, useContext } from "react";

const cartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalvalue, setTotalValue] = useState();
  const [subtotalvalue, setSubTotalValue] = useState();
  useEffect(() => {
    let value = 0;
    cart.map((item) => {
      value = value + item.price;
      setSubTotalValue(value);
      setTotalValue(value +10.00)
      // if(subtotalvalue > 250.00){

      // }
    });
  }, [cart]);
  function add(item) {
     const newCart = cart;
     newCart.push(item);
     setCart([...newCart]);
    
  }
  function remove(index) {
    let newCart = cart.filter((item, i) => i !== index);
    setTotalValue()
    setCart([...newCart]);
  }
  const store = {
    add,
    remove,
    cart,
    totalvalue,
    subtotalvalue
  };
  return <cartContext.Provider value={store}>{children}</cartContext.Provider>;
}
export function useCart() {
  const context = useContext(cartContext);
  return context;
  // const { add, remove, cart, totalvalue } = context;
  // return {
  //   add,
  //   remove,
  //   cart,
  //   totalvalue,
  // };
}
