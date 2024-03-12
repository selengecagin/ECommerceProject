import api from "../../api";

export const ProductActions = {
  setProductList: "SET_PRODUCT_LIST",
  setLoadingState: "SET_LOADING_STATE",
  setTotalProductCount: "SET_TOTAL_PRODUCT_COUNT",
  setPageCount: "SET_PAGE_COUNT",
  setActivePage: "SET_ACTIVE_PAGE",
  fetchState: "SET_FETCH_STATE",
};

export const setProductList = (product) => {
  return { type: ProductActions.setProductList, payload: product };
};

export const setLoadingState = (loadingState) => {
  return { type: ProductActions.fetchState, payload: loadingState };
};

export const setTotalProductCount = (productCount) => {
  return {
    type: ProductActions.setTotalProductCount,
    payload: productCount,
  };
};

export const setPageCount = (pageCount) => {
  return { type: ProductActions.setPageCount, payload: pageCount };
};

export const setActivePage = (activePage) => {
  return { type: ProductActions.setActivePage, payload: activePage };
};

export const fethingState = (fetchState) => {
  return { type: ProductActions.fetchState, payload: fetchState };
};

export const fetchProducts = () => (dispatch) => {
  
  api
    .get("/products")
    .then((res) => {
      dispatch(setProductList(res.data));
      console.log("Fetch Products Response: ", res.data);
    })
    .catch((err) => console.log("Fetch Products Error: ", err));
};
