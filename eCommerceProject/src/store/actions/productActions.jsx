export const GlobalProductData = {
  setFetching: "FETCHING",
  setFetched: "FETCHED",
  setFailed: "FAILED",
  setFetchMore: "FETCH_MORE",
};

export const fetchingActionCreator = (data) => ({
  type: GlobalProductData.fetching,
  payload: data,
});

export const fetchedActionCreator = (data) => ({
  type: GlobalProductData.setFetched,
  payload: data,
});

export const failedActionCreator = (data) => ({
  type: GlobalProductData.setFailed,
  payload: data,
});

export const fetchMoreActionCreator = (data) => ({
  type: GlobalProductData.setFetchMore,
  payload: data,
});
