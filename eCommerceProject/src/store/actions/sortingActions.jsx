import api from "../../api";

export const SortingActions = {
  sortProducts: "SORT_PRODUCTS",
};

export const sortProducts = (data) => {
  return { type: SortingActions.sortProducts, payload: data };
};
