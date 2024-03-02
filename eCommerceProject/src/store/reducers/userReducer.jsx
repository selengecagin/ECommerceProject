import { GlobalUserActions } from "../actions/userActions";

const initialState = { id: null, name: "", email: "" };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalUserActions.loginSuccess:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };

    case GlobalUserActions.loginFailure:
      return action.payload;

    case GlobalUserActions.loginVerify:
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };

    case GlobalUserActions.loginExit:
      // localStorage.removeItem("shoppingCart");
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
