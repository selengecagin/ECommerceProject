export const GlobalProductData = {
  setFetching: "FETCHING",
  setFetched: "FETCHED",
  setFailed: "FAILED",
  setFetchMore: "FETCH_MORE",
};

export const setFetching = (data) => ({
  type: GlobalProductData.fetching,
  payload: data,
});

export const setFetched = (data) => ({
  type: GlobalProductData.setFetched,
  payload: data,
});

export const setFailed = (data) => ({
  type: GlobalProductData.setFailed,
  payload: data,
});

export const fetchMore = (data) => ({
  type: GlobalProductData.setFetchMore,
  payload: data,
});
