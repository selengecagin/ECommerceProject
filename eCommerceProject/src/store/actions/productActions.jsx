export const GlobalProductActions = {
  PRODUCTS_FETCHING: "PRODUCTS_FETCHING",
  PRODUCTS_FETCHED: "PRODUCTS_FETCHED",
  PRODUCTS_FETCH_MORE: "PRODUCTS_FETCH_MORE",
  PRODUCTS_FETCH_FAILED: "PRODUCTS_FETCH_FAILED",
  PRODUCTS_NOT_FETCHED: "PRODUCTS_NOT_FETCHED",
  SET_ACTIVE_PAGE: "SET_ACTIVE_PAGE",
};

export const productsFetchingActionCreator = (data) => ({
  type: GlobalProductActions.PRODUCTS_FETCHING,
  payload: data,
});

export const productsFetchedActionCreator = (data) => ({
  type: GlobalProductActions.PRODUCTS_FETCHED,
  payload: data,
  //payload: { products, totalCount, productsPerPage }
});

export const productsFetchActionCreator = (data) => ({
  type: GlobalProductActions.PRODUCTS_FETCH_FAILED,
});

export const setActivePageActionCreator = (pageNumber) => ({
  type: GlobalProductActions.PRODUCTS_FETCH_FAILED,
  payload: pageNumber,
});
