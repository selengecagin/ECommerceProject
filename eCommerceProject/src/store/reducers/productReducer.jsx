import { GlobalProductData } from "../actions/productActions";

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
    case GlobalProductData.setFetching:
    // return { ...state, loading: true };

    case GlobalProductData.setFetching:
      return { ...state, loading: true };

    case GlobalProductData.setFetched:
      return {
        ...state,
        totalProductCount: action.payload.total,
        productList: action.payload.products,
        fetchState: "FETCHED",
      };

    case GlobalProductData.setFailed:
      return { ...state, loading: false, products: [], error: action.payload };

    case GlobalProductData.setFailed:
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
