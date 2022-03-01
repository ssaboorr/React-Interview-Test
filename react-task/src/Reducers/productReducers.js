import {
  PRODUCT_ASSIGN_SUPPLIER_REQUEST,
  PRODUCT_ASSIGN_SUPPLIER_SUCCESS,
  PRODUCT_ASSIGN_SUPPLIER_FAIL,
  PRODUCT_ASSIGN_SUPPLIER_RESET,
} from "../Constants/productConstants";
import products from "../data/productData";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_ASSIGN_SUPPLIER_REQUEST:
      return { loading: true };
    case PRODUCT_ASSIGN_SUPPLIER_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_ASSIGN_SUPPLIER_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_ASSIGN_SUPPLIER_RESET:
      return { products: [] };
    default:
      return state;
  }
};
