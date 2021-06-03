import { FILL_CART } from "../action-types/cart-action-type";

const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case FILL_CART:
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

export default cart;
