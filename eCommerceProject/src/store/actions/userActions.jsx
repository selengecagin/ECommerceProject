export const GlobalUserActions = {
  loginSuccess: "LOGIN_SUCCESS",
  loginFailure: "LOGIN_FAILURE",
  loginVerify: "LOGIN_VERIFY",
  loginExit: "LOGIN_EXIT",
};

export const loginUserSuccess = (data) => ({
  type: GlobalUserActions.loginSuccess,
  payload: data,
});

export const loginUserFailure = (data) => ({
  type: GlobalUserActions.loginFailure,
  payload: data,
});

export const loginUserVerify = (data) => ({
  type: GlobalUserActions.loginVerify,
  payload: data,
});

export const loginUserExit = () => ({
  type: GlobalUserActions.loginExit,
});
