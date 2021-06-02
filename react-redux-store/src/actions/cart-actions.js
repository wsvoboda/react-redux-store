import { FILL_CART } from "../action-types/cart-action-type";

export const fillCart = (dispatch, product) => {
  return dispatch({ type: FILL_CART, payload: product });
};
