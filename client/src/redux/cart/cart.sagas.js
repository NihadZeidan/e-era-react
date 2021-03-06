import { all, call, takeLatest, put, select } from "redux-saga/effects";
import { UserActionTypes } from "../user/user.types";
import cartActionTypes from "./cart.types";
import { clearCart } from "./cart.actions";
import { getUserCartRef } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../user/user.selectors";
import { selectCartItems } from "./cart.selectors";
import { userCartFromFirebase } from "../cart/cart.actions";

export function* signOutSuccess() {
  yield put(clearCart());
}

export function* checkUserCartOnSignIn() {
  try {
    const user = yield select(selectCurrentUser);

    const userCartRef = yield call(getUserCartRef, user.id);

    const userCartSnapShot = yield userCartRef.get();

    yield put(userCartFromFirebase(userCartSnapShot.data().cartItems));
  } catch (e) {
    console.log(e);
  }
}

export function* userCartChanged() {
  const user = yield select(selectCurrentUser);
  const cartItems = yield select(selectCartItems);

  if (user) {
    try {
      const userCartRef = yield call(getUserCartRef, user.id);

      yield userCartRef.update({ cartItems: cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* onUserSignOut() {
  // Note how we listen to an event that triggered in actions form user reducers
  yield takeLatest(UserActionTypes.USER_SIGN_OUT_SUCCESS, signOutSuccess);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkUserCartOnSignIn);
}

export function* onCartItemChange() {
  yield takeLatest(
    [
      cartActionTypes.ADD_ITEM,
      cartActionTypes.REMOVE_ITEM,
      cartActionTypes.CLEAR_ITEM,
    ],
    userCartChanged
  );
}

export function* cartSagas() {
  yield all([call(onUserSignOut), call(onUserSignIn), call(onCartItemChange)]);
}
