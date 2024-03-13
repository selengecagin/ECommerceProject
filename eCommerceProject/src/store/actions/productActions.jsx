import api from "../../api";

export const ProductActions = {
  setFetching: "SET_FETCHING",
  setFetchMore: "SET_FETCH_MORE",
  setFetched: "SET_FETCHED",
  setFailed: "SET_FAILED",
  setFetchSingleProduct: "SET_FETCH_SINGLE_PRODUCT",
};

export const setFetching = (product) => {
  return { type: ProductActions.setFetching, payload: product };
};

export const setFetched = (product) => {
  return { type: ProductActions.setFetched, payload: product };
};

export const setFailed = (product) => {
  return { type: ProductActions.setFailed, payload: product };
};

export const setFetchSingleProduct = (product) => {
  return { type: ProductActions.setFetchSingleProduct, payload: product };
};

export const fetchMore = (product) => ({
  type: ProductActions.setFetchMore,
  payload: product,
});

export const fetchProducts = () => (dispatch) => {
  api
    .get("/products")
    .then((res) => {
      dispatch(setFetching(res.data));
      console.log("Fetch Products Response: ", res.data);
    })
    .catch((err) => console.log("Fetch products error: ", err));
};

export const fetchNextPage = (data) => (dispatch) => {
  api
    .get("/products", {
      params: data,
    })
    .then((res) => {
      dispatch(fetchMore(res.data));
      console.log("Product data from fetchNextPage action: ", res.data);
    })
    .catch((err) => {
      dispatch(setFailed(err.message));
    });
};

export const fetchSingleProduct = (data) => (dispatch) => {
  dispatch(setFetching());

  api
    .get(`/products/${data}`)
    .then((res) => {
      dispatch(fetchSingleProduct(res.data));
      console.log("Product data: ", res.data);
    })
    .catch((err) => {
      dispatch(setFailed(err.message));
    });
};
