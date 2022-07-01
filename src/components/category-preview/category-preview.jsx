import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card";
import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
  //   console.log("CategoryPreview:title ", title);

  return (
    <div className="category-preview-container">
      <Link className="title" to={title}>
        {title.toUpperCase()}
      </Link>

      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} title={title} product={product} />
          ))}
        <span></span>
      </div>
    </div>
  );
};

export default CategoryPreview;
