import { GlobalActions } from "../actions/globalActions";

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalActions.SET_ROLE:
      return { ...state, roles: action.payload };
    case GlobalActions.SET_CATEGORY:
      return { ...state, roles: action.payload };
    case GlobalActions.SET_THEME:
      return { ...state, roles: action.payload };
    case GlobalActions.SET_LANGUAGE:
      return { ...state, roles: action.payload };
    default:
      return state;
  }
};

export default globalReducer;
