import { ProductActions } from "../actions/productActions";

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActions.setFetching:
      return { ...state, productList: action.payload };

    case ProductActions.setFetched:
      return {
        ...state,
        totalProductCount: action.payload.total,
        productList: action.payload.products,
        fetchState: "FETCHED",
      };

    case ProductActions.setFailed:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };

    case ProductActions.setFetchMore:
      return {
        ...state,
        totalProductCount: action.payload.total,
        productList: [...state.productList, ...action.payload.products],
        fetchState: "FETCH_MORE",
      };

    case ProductActions.setFetchSingleProduct:
      return {
        ...state,
        product: action.payload,
        fetchState: "FETCHED",
      };

    default:
      return state;
  }
};

export default productReducer;
