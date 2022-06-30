import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, product) => {
  const hasItem = cartItems.find((item) => item.id === product.id);

  if (hasItem) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};
export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => null,
  cartItems: [],
  addItem2Cart: () => null,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((tatal, item) => item.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItem2Cart = (product) => {
    console.log("addItem2Cart", addItem2Cart);
    setCartItems(addCartItem(cartItems, product));
  };

  const value = { isCartOpen, setCartOpen, addItem2Cart, cartItems, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
