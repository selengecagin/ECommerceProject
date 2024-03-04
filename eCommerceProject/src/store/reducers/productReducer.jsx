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
    case GlobalProductActions.PRODUCTS_FETCHING:
      return { ...state, loading: true, fetchState: "FETCHING" };

    case GlobalProductActions.PRODUCTS_FETCHED:
      return {
        ...state,
        productList: action.payload.products,
        totalProductCount: action.payload.totalCount,
        pageCount: Math.ceil(
          action.payload.totalCount / action.payload.productsPerPage
        ),
        fetchState: "FETCHED",
      };

    case GlobalProductActions.PRODUCTS_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
        fetchState: "FAILED",
      };

    // case SET_ACTIVE_PAGE:
    //   return {
    //     ...state,
    //     activePage: action.payload,
    //   };

    default:
      return state;
  }
};

export default productReducer;
