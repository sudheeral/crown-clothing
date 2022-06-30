import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import "./card-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log("cartItems", cartItems);

  const navidate = useNavigate();

  const checkoutHandler = () => navidate("/checkout");

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
