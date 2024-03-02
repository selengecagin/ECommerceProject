const initialState = {
  store: {},
};

const SET_STORE = "SET_STORE";

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE:
      return {
        ...state,
        store: action.payload,
      };
    default:
      return state;
  }
};

export const setStore = (store) => ({
  type: SET_STORE,
  payload: store,
});

export default storeReducer;
