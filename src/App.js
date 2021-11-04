import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import Header from "./components/header/header.component";
import SignIn from "./pages/signin/sign-in.component";
import SignUp from "./pages/signup/sign-up.component";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUserInfo(user);
    });

    // This to close the auth listener when the component is unmounted
    return () => unSubscribeFromAuth();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header isUserSignedIn={userInfo} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
