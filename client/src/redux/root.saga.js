import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export function* rootSaga() {
  // Yields all the sagas IMPORTANT
  yield all([call(cartSagas), call(userSagas)]);
}
