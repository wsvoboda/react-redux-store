import { FILL_PRODUCTS_FROM_API } from "../action-types/products-action-types";

const initialState = [{}];

const products = (state = initialState, action) => {
  switch (action.type) {
    case FILL_PRODUCTS_FROM_API:
      return (state = action.payload);
    default:
      return state;
  }
};

export default products;
