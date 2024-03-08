import api from "../../api";
import { toast } from "react-toastify";
export const GlobalUserActions = {
  setLoginSuccess: "LOGIN_SUCCESS",
  setLoginFailure: "LOGIN_FAILURE",
  setLoginExit: "LOGIN_EXIT",
};

export const loginSuccess = (data) => ({
  type: GlobalUserActions.setLoginSuccess,
  payload: data,
});

export const loginFailure = (data) => ({
  type: GlobalUserActions.setLoginFailure,
  payload: data,
});

export const loginVerify = (data) => ({
  type: GlobalUserActions.setLoginVerify,
  payload: data,
});

export const loginExit = () => ({
  type: GlobalUserActions.setLoginExit,
});

export const loginUserAction = (creds, navigate) => (dispatch) => {
  localStorage.setItem("userName", creds.userName);

  api
    .post("/login", creds)
    .then((res) => {
      dispatch(loginSuccess(res.data));
      localStorage.setItem("token", res.data.token);
      toast.success("You have successfully logged in.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/");
      }, 250);
    })
    .catch((err) => {
      dispatch(loginFailure(err.response.data));
      toast.error("Incorrect username or password. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export const userAuthAction = (navigate) => (dispatch) => {
  const token = localStorage.getItem("token");
  //TODO try header update
  if (token) {
    api
      .post("/verify", {
        header: {
          Authorization: token,
        },
      })
      .then((res) => {
        const user = res.data.user;
        const newToken = res.data.token;

        dispatch(loginSuccess(user));

        if (newToken) {
          localStorage.setItem("token", newToken);
          api.defaults.headers.common["Authorization"] = newToken;
        }

        setTimeout(() => navigate(-1), 5000);
      })
      .catch((err) => {
        console.log("Login Error: ", err);
        localStorage.removeItem("token");
        if (api.defaults.headers.common["Authorization"]) {
          delete api.defaults.headers.common["Authorization"];
        }
      });
  }
};
