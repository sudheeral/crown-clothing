import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import ProductCard from "../product-card/product-card";
import { CategoriesContext } from "../../contexts/categories-context";

import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  console.log("Category", category);
  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
