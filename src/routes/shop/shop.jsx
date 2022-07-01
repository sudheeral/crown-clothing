import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview";
import Category from "../../components/category/category";

import "./shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
