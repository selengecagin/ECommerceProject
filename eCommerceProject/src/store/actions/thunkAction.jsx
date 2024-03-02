import axios from "axios";

export const login = (creds) => (dispatch, getState) => {
  axios.post("/login", creds).then((res) => {
    const loggedInAction = { type: USER_LOGGED_IN, payload: res.data.user };
    dispatch(loggedInAction);
  });
};
