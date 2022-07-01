import { createContext, useEffect, useState } from "react";
import {
  //addCollectionAndDocuments,
  getCollectionAndDocuments,
} from "../utils/firebase";
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: null,
  setProducts: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const value = { categories };

  useEffect(() => {
    //run once below function
    //addCollectionAndDocuments("categories", SHOP_DATA);

    const getCategories = async () => {
      const categories = await getCollectionAndDocuments();
      console.log("categoriesMap", categories);

      setCategories(categories);
    };

    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
