import React, { useEffect, useContext } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Background from "./components/atoms/background/Background";
import Header from "./components/organisms/header/Header";
import Form from "./components/organisms/form/Form";
import { signIn } from "./utils/utilFunctions";
import { signInContext } from "./contexts/SignInContext";
import { windowController } from "./utils/utilFunctions";

function App() {
  const [SignIn, setSignIn] = useContext(signInContext);

  const alertfunc = (e) => {
    e.preventDefault();
    alert("message");
  };

  useEffect(() => {
    signIn()
      .then((user) => {
        setSignIn(true);
      })
      .then()
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", windowController.bind(this));

    return () => {
      window.removeEventListener("beforeunload", windowController.bind(this));
    };
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Background />
          <Header />
          <Form />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
