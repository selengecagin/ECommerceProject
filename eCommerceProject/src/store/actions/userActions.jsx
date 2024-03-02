export const GlobalUserActions = {
  setLoginSuccess: "LOGIN_SUCCESS",
  setLoginFailure: "LOGIN_FAILURE",
  setLoginVerify: "LOGIN_VERIFY",
  setLoginExit: "LOGIN_EXIT",
};

export const loginUserSuccess = (data) => ({
  type: GlobalUserActions.setLoginSuccess,
  payload: data,
});

export const loginUserFailure = (data) => ({
  type: GlobalUserActions.setLoginFailure,
  payload: data,
});

export const loginUserVerify = (data) => ({
  type: GlobalUserActions.setLoginVerify,
  payload: data,
});

export const loginUserExit = () => ({
  type: GlobalUserActions.setLoginExit,
});
