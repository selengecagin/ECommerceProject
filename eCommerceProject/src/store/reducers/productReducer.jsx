import { GlobalProductActions } from "../actions/productActions";

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: "NOT_FETCHED",
};
//fetch state: {String} “NOT_FETCHED” | “FETCHING” | “FETCHED” | “FAILED”

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case GlobalProductActions.setFetching:
      return { ...state, loading: true };

    case GlobalProductActions.setFetched:
      return {
        ...state,
        totalProductCount: action.payload.total,
        productList: action.payload.products,
        fetchState: "FETCHED",
      };

    case GlobalProductActions.setFailed:
      return { ...state, loading: false, products: [], error: action.payload };

    case GlobalProductActions.setFailed:
      return {
        ...state,
        totalProductCount: action.payload.total,
        productList: [...state.productList, ...action.payload.products],
        fetchState: "FAILED",
      };

    default:
      return state;
  }
};

export default productReducer;
