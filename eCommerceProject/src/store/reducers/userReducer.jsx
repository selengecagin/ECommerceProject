import { GlobalUserActions } from "../actions/userActions";

const initialState = {
  id: null,
  name: "",
  userName: "",
  email: "",
  role_id: "",
  isLoggedIn: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalUserActions.setLoginSuccess:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        role_id: action.payload.role_id,
        isLoggedIn: true,
        error: null,
      };

    case GlobalUserActions.setLoginFailure:
      return { ...state, error: action.payload, isLoggedIn: false };

    case GlobalUserActions.setLoginVerify:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        role_id: action.payload.role_id,
        isLoggedIn: true,
      };

    case GlobalUserActions.setLoginExit:
      // localStorage.removeItem("shoppingCart");
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
