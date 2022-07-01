import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview";
import { CategoriesContext } from "../../contexts/categories-context";

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
  // console.log("Shop: categories: ", categories);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        //console.log("Shop: products: ", title, categories);

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
