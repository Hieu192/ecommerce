import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";


const initialState = {
    products: [],
    product: null,
    error: null,
    loading: false
  };

  export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case FIND_PRODUCTS_REQUEST:
      case FIND_PRODUCT_BY_ID_REQUEST:
        return { ...state, loading: true, error: null };
  
  
      case FIND_PRODUCTS_SUCCESS:
        return { ...state, products: action.payload, loading: false, error: null };
      case FIND_PRODUCT_BY_ID_SUCCESS:
        return { ...state, product: action.payload, loading: false, error: null };
  
      case FIND_PRODUCT_BY_ID_FAILURE:
      case FIND_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  