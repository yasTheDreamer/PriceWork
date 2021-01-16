import React, { useState, createContext } from "react";

export const signInContext = createContext();

export const SignInProvider = (props) => {
  const [SignIn, setSignIn] = useState(false);

  return (
    <signInContext.Provider value={[SignIn, setSignIn]}>
      {props.children}
    </signInContext.Provider>
  );
};
