import {
  PRODUCT_ASSIGN_SUPPLIER_REQUEST,
  PRODUCT_ASSIGN_SUPPLIER_SUCCESS,
  PRODUCT_ASSIGN_SUPPLIER_FAIL,
} from "../Constants/productConstants";
import products from "../data/productData";

export const assignSupplier = (supplier, productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_ASSIGN_SUPPLIER_REQUEST });

    const newProd = products.map((obj) => {
      if (obj.id === productId) {
        obj.supplier = supplier;
      }
      return obj;
    });

    // console.log(newProd);

    dispatch({
      type: PRODUCT_ASSIGN_SUPPLIER_SUCCESS,
      payload: newProd,
    });
  } catch (error) {
    dispatch({ type: PRODUCT_ASSIGN_SUPPLIER_FAIL, payload: error });
  }
};
