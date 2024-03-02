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
        return{...state,}

    case GlobalActions.setCategory:
      return { ...state, categories: [...action.payload] };


    default:
      return state;
  }
};

export default globalReducer;
