import api from "../../api";

export const ProductActions = {
  fetchProductRequest: "FETCH_PRODUCT_REQUEST",
  fetchProductSuccess: "FETCH_PRODUCT_SUCCESS",
  fetchProductFailure: "FETCH_PRODUCT_FAILURE",
  fetchMoreProduct: "FETCH_MORE_PRODUCT",
  sortProducts: "SORT_PRODUCTS",
  sortCategories: "SORT_CATEGORIES",
};

export const fetchProductRequest = () => {
  return { type: ProductActions.fetchProductRequest };
};

export const fetchProductSuccess = (data) => {
  return { type: ProductActions.fetchProductSuccess, payload: data };
};

export const fetchMoreProduct = (data) => {
  return { type: ProductActions.fetchMoreProduct, payload: data };
};

export const fetchProductFailure = (error) => {
  return { type: ProductActions.fetchProductFailure, error };
};

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchProductRequest());
  api
    .get("/products")
    .then((res) => {
      dispatch(fetchProductSuccess(res.data));
      console.log("Fetch Products Response: ", res.data);
    })
    .catch((err) => {
      dispatch(fetchProductFailure(err));
      console.log("Fetch Products Error: ", err);
    });
};

export const fetchMoreProducts = (data) => (dispatch) => {
  api
    .get("/products", {
      params: data,
    })
    .then((res) => {
      dispatch(fetchMoreProduct(res.data));
      console.log("Fetch More Products Response: ", res.data);
    })
    .catch((err) => {
      console.log("Fetch More Products Error: ", err);
    });
};
