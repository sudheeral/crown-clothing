import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import Button from "../button/button";

import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { addItem2Cart } = useContext(CartContext);

  const addProduct2Cart = () => {
    console.log("addProduct2Cart", product);
    addItem2Cart(product);
  };

  const { name, price, imageUrl } = product;
  console.log("products", product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addProduct2Cart}>Add to Cart</Button>
    </div>
  );
};
export default ProductCard;
