import { ProductActions } from "../actions/productActions";

const initialState = {
  productList: [],
  totalProductCount: 0,
  pageCount: 0,
  activePage: 1,
  fetchState: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActions.setProductList:
      return { ...state, productList: action.payload };
    case ProductActions.setTotalProductCount:
      return { ...state, totalProductCount: action.payload };
    case ProductActions.setPageCount:
      return { ...state, pageCount: action.payload };
    case ProductActions.setActivePage:
      return { ...state, activePage: action.payload };
    case ProductActions.fetchState:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};

export default productReducer;
