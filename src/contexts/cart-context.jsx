import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, product) => {
  const hasItem = cartItems.find((item) => item.id == product.id);

  if (hasItem) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItem) => {
  const existingItem = cartItems.find((item) => item.id == cartItem.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id != cartItem.id);
  }

  return cartItems.map((item) =>
    item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const clearCartItem = (cartItems, cartItem) => {
  return cartItems.filter((item) => item.id != cartItem.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => null,
  cartItems: [],
  addItem2Cart: () => null,
  cartCount: 0,
  clearItemFromCart: () => null,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, item) => total + (item.price + item.quantity),
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItem2Cart = (product) => {
    console.log("addItem2Cart", product);
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemFromCart = (cartItem) => {
    console.log("addItem2Cart", cartItem);
    setCartItems(removeCartItem(cartItems, cartItem));
  };

  const clearItemFromCart = (cartItem) => {
    console.log("addItem2Cart", addItem2Cart);
    setCartItems(clearCartItem(cartItems, cartItem));
  };

  const value = {
    isCartOpen,
    setCartOpen,
    addItem2Cart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
