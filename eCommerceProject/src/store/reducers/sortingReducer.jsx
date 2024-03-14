import { SortingActions } from "../actions/sortingActions";

const initialState = {
  sortOption: "default", // or any default value you have
};

const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SortingActions.sortProducts:
      return { ...state, sortOption: action.payload };
    default:
      return state;
  }
};

export default sortingReducer;
