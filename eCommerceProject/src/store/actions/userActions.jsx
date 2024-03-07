import api from "../../api";
import { toast } from "react-toastify";
export const GlobalUserActions = {
  setLoginSuccess: "LOGIN_SUCCESS",
  setLoginFailure: "LOGIN_FAILURE",
  setLoginExit: "LOGIN_EXIT",
};
// action creators
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

//TODO burada navigate argüman olarak alınıyor ancak useNavigate yok,nasıl çalışıyor
//useNavigate hook actionların içinde direkt kullanıldığında hata fırlatıyor
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
  if (token) {
    //auto login feature
    api
      .post("/verify", {
        header: {
          Authorization: token,
        },
      })
      .then((res) => {
        const user = res.data.user; // Assuming the response has a 'user' object
        const newToken = res.data.token; // Assuming the response sends back a new token

        // Dispatch user object to reducer
        dispatch(loginSuccess(user));

        // Update token in localStorage & Axios header if a new token is provided
        if (newToken) {
          localStorage.setItem("token", newToken); // Renew token in local storage
          api.defaults.headers.common["Authorization"] = newToken;

          // If using an Axios instance named 'api', replace the line above with:
          // api.defaults.headers.common['Authorization'] = newToken;
        }

        // Navigate after successful token verification
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
