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
import { createUserProfileDocument } from "./firebase/firebase.utils.js";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (AuthUser) => {
      if (AuthUser) {
        const userRef = await createUserProfileDocument(AuthUser);

        //listining to any changes to the user in the database and return the updated data
        userRef.onSnapshot((snapshot) => {
          setUserInfo({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setUserInfo(null);
      }
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
