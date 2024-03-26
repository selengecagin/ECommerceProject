import { ProductActions } from "../actions/productActions";

const initialState = {
  loading: false,
  products: [],
  total: 0,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActions.fetchProductRequest:
      return { ...state, loading: true };

    case ProductActions.fetchProductSuccess:
      return {
        ...state,
        loading: false,
        products: action.payload,
        total: action.payload.total,
      };

    case ProductActions.fetchProductFailure:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default productReducer;
