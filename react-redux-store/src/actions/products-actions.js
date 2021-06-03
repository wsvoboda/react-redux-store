import { FILL_PRODUCTS_FROM_API } from "../action-types/products-action-types";
import { FILL_INDIVIDUAL_PRODUCT } from "../action-types/products-action-types";

export const showProducts = (dispatch, all) => {
  return dispatch({ type: FILL_PRODUCTS_FROM_API, payload: all });
};

export const showOneProduct = (dispatch, one) => {
  return dispatch({ type: FILL_INDIVIDUAL_PRODUCT, payload: one });
};
