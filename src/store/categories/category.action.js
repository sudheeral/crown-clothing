import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailed = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    categoriesArray
  );

export const setCategoriesAsync = async (dispatch) => {
  dispatch(fetchCategoriesStart);

  try {
    const categories = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categories));
    console.log("Shop: useEffect: categories", categories);
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
