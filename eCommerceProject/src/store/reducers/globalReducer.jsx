import { GlobalActions } from "../actions/globalActions";

const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalActions.setRole:
      return { ...state, roles: action.payload };
    case GlobalActions.setCategories:
      return { ...state, categories: action.payload };
    case GlobalActions.setTheme:
      return { ...state, theme: action.payload };
    case GlobalActions.setLanguage:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default globalReducer;
