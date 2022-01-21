import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: action.payload,
      };

    case UserActionTypes.USER_SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: null,
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.USER_SIGN_UP_FAILURE:
    case UserActionTypes.USER_SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
