import React, { lazy, Suspense } from "react";
import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import { checkUserAuthentication } from "./redux/user/user.actions";
import "./App.scss";
// import { auth } from "./firebase/firebase.utils";
// import {
// createUserProfileDocument,
// addCollectionAndDocuments,
// } from "./firebase/firebase.utils.js";

import { useSelector } from "react-redux";
// import { setUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

// import { selectCollectionForPreview } from "./redux/shop/shop.selectors";
// import { createStructuredSelector } from "reselect";

// Lazy Loading our components
const HomePage = lazy(() => import("./pages/homePage/homePage.component"));
const ShopPage = lazy(() => import("./pages/shopPage/shopPage.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const ContactPage = lazy(() => import("./pages/contact/contactPage.component"));
const SignIn = lazy(() => import("./pages/signin/sign-in.component"));
const SignUp = lazy(() => import("./pages/signup/sign-up.component"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuthentication());
  }, []);

  // You can pull selectors with one of these two methods
  const currentUser = useSelector((state) => selectCurrentUser(state));
  // OR
  // const currentUser = createStructuredSelector({ selectCurrentUser });

  // const collectionsToAddToFireStore = useSelector((state) =>
  // selectCollectionForPreview(state)
  // );

  // This was the observable pattren to sign in the user, I replaced it with redux SAGA
  // useEffect(() => {
  // const unSubscribeFromAuth = auth.onAuthStateChanged(async (AuthUser) => {
  // if (AuthUser) {
  // const userRef = await createUserProfileDocument(AuthUser);

  //listining to any changes to the user in the database and return the updated data
  //     userRef.onSnapshot((snapshot) => {
  //       dispatch(
  //         setUser({
  //           id: snapshot.id,
  //           ...snapshot.data(),
  //         })
  //       );
  //     });
  //   } else {
  //     dispatch(setUser(null));
  //   }
  // });

  // addCollectionAndDocuments(
  // "collections",
  // collectionsToAddToFireStore.map(({ title, items }) => ({ title, items }))
  // );

  // This to close the auth listener when the component is unmounted
  // return () => unSubscribeFromAuth();

  // eslint-disable-next-line
  // }, []);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            {/* We do not use exact to the shop endpoint to use different cartegory as params (nesting route) */}
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/sign-in"
              render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
            />
            <Route
              exact
              path="/sign-up"
              render={() => (currentUser ? <Redirect to="/" /> : <SignUp />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
