import { all, call, takeLatest, put } from "redux-saga/effects";
import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* signOutSuccess() {
  yield put(clearCart());
}

export function* onUserSignOut() {
  // Note how we listen to an event that triggeren in actions form user reducers
  yield takeLatest(UserActionTypes.USER_SIGN_OUT_SUCCESS, signOutSuccess);
}

export function* cartSagas() {
  yield all([call(onUserSignOut)]);
}
