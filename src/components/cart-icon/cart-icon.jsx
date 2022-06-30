import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";

const CartIcon = () => {
  const { isCartOpen, setCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShopingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
