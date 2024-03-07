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
    case GlobalActions.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case GlobalActions.SET_THEME:
      return { ...state, theme: action.payload };
    case GlobalActions.SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default globalReducer;
