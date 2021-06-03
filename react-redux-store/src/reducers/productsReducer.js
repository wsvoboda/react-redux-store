import { FILL_PRODUCTS_FROM_API } from "../action-types/products-action-types";
// import { FILL_INDIVIDUAL_PRODUCT } from "../action-types/products-action-types";

const initialState = /*allProducts: [{}], oneProduct:*/ [{}];

const products = (state = initialState, action) => {
  switch (action.type) {
    // case FILL_PRODUCTS_FROM_API:
    //   return { ...state, allProducts: [action.payload] };
    // case FILL_INDIVIDUAL_PRODUCT:
    //   return { ...state, oneProduct: [action.payload] };
    // default:
    //   return state;
    case FILL_PRODUCTS_FROM_API:
      return (state = action.payload);
    // case FILL_INDIVIDUAL_PRODUCT:
    //   return (state = action.payload);
    default:
      return state;
  }
};

export default products;
