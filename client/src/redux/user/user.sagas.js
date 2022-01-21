import { all, call, put, takeLatest } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
  signInFailure,
  signInSuccess,
  userSignOutSuccess,
  userSignOutFailure,
  userSignUpSuccess,
  userSignUpFailure,
} from "./user.actions";

import {
  createUserProfileDocument,
  auth,
  googleProvider,
  getCurrentUser,
} from "../../firebase/firebase.utils";

export function* getUserAuthSnapshot(userAuth, otherData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, otherData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserAuthSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getUserAuthSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* authenticateUser() {
  try {
    const authUser = yield getCurrentUser();
    if (!authUser) return;
    yield getUserAuthSnapshot(authUser);
  } catch (error) {
    yield put(signInFailure, error);
  }
}

export function* userSignOut() {
  try {
    yield auth.signOut();
    yield put(userSignOutSuccess());
  } catch (error) {
    put(userSignOutFailure(error));
  }
}

export function* userSignUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(userSignUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(userSignUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  try {
    yield getUserAuthSnapshot(user, additionalData);
  } catch (error) {
    yield put(userSignUpFailure(error));
  }
}

export function* onSignInWithGoogleStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignInWithEmailStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserAuthintication() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, authenticateUser);
}

export function* onUserSignOutStart() {
  yield takeLatest(UserActionTypes.USER_SIGN_OUT_START, userSignOut);
}

export function* onUserSignUpStart() {
  yield takeLatest(UserActionTypes.USER_SIGN_UP_START, userSignUp);
}

export function* onUserSignUpSuccess() {
  yield takeLatest(UserActionTypes.USER_SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onCheckUserAuthintication),
    call(onSignInWithGoogleStart),
    call(onSignInWithEmailStart),
    call(onUserSignOutStart),
    call(onUserSignUpStart),
    call(onUserSignUpSuccess),
  ]);
}
