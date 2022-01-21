import { UserActionTypes } from "./user.types";

export const setUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
  };
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};
export const signInSuccess = (user) => {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};
export const signInFailure = (error) => {
  return {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error,
  };
};

export const checkUserAuthentication = () => {
  return {
    type: UserActionTypes.CHECK_USER_SESSION,
  };
};

export const userSignOutStart = () => {
  return {
    type: UserActionTypes.USER_SIGN_OUT_START,
  };
};

export const userSignOutSuccess = () => {
  return {
    type: UserActionTypes.USER_SIGN_OUT_SUCCESS,
  };
};

export const userSignOutFailure = (error) => {
  return {
    type: UserActionTypes.USER_SIGN_OUT_FAILURE,
    payload: error,
  };
};

export const userSignUpStart = (userCridentials) => {
  return {
    type: UserActionTypes.USER_SIGN_UP_START,
    payload: userCridentials,
  };
};

export const userSignUpSuccess = (userAuth) => {
  return {
    type: UserActionTypes.USER_SIGN_UP_SUCCESS,
    payload: userAuth,
  };
};

export const userSignUpFailure = (error) => {
  return {
    type: UserActionTypes.USER_SIGN_UP_FAILURE,
    payload: error,
  };
};
