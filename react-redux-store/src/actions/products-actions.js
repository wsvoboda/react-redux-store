import { FILL_PRODUCTS_FROM_API } from "../action-types/products-action-types";

export const showProducts = (dispatch, allProducts) => {
  return dispatch({ type: FILL_PRODUCTS_FROM_API, payload: allProducts });
};
