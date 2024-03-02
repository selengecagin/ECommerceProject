export const GlobalUserActions = {
  setLoginSuccess: "LOGIN_SUCCESS",
  setLoginFailure: "LOGIN_FAILURE",
  setLoginVerify: "LOGIN_VERIFY",
  setLoginExit: "LOGIN_EXIT",
};

export const loginUserSuccessActionCreator = (data) => ({
  type: GlobalUserActions.setLoginSuccess,
  payload: data,
});

export const loginUserFailureActionCreator = (data) => ({
  type: GlobalUserActions.setLoginFailure,
  payload: data,
});

export const loginUserVerifyActionCreator = (data) => ({
  type: GlobalUserActions.setLoginVerify,
  payload: data,
});

export const loginUserExitActionCreator = () => ({
  type: GlobalUserActions.setLoginExit,
});
