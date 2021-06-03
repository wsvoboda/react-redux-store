import { FILL_CART } from "../action-types/cart-action-type";

export const fillCart = (dispatch, item) => {
  return dispatch({
    type: FILL_CART,
    payload: item,
  });
};
