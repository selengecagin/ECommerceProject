import { GlobalUserActions } from "../actions/userActions";

const initialState = { id: null, name: "", email: "" };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalUserActions.setLoginSuccess:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };

    case GlobalUserActions.setLoginFailure:
      return action.payload;

    case GlobalUserActions.setLoginVerify:
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };

    case GlobalUserActions.setLoginExit:
      // localStorage.removeItem("shoppingCart");
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
