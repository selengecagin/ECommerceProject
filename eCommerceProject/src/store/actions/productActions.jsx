export const GlobalProductActions = {
  setFetching: "FETCHING",
  setFetched: "FETCHED",
  setFailed: "FAILED",
  setFetchMore: "FETCH_MORE",
};

export const fetchingActionCreator = (data) => ({
  type: GlobalProductActions.fetching,
  payload: data,
});

export const fetchedActionCreator = (data) => ({
  type: GlobalProductActions.setFetched,
  payload: data,
});

export const failedActionCreator = (data) => ({
  type: GlobalProductActions.setFailed,
  payload: data,
});

export const fetchMoreActionCreator = (data) => ({
  type: GlobalProductActions.setFetchMore,
  payload: data,
});
