import React, { useState, createContext } from "react";
import User from "../models/User";

export const factorBuilderContext = createContext();

export const FactorBuilderProvider = (props) => {
  const [factorBuilder, setFactorBuilder] = useState(new User());

  return (
    <factorBuilderContext.Provider value={[factorBuilder, setFactorBuilder]}>
      {props.children}
    </factorBuilderContext.Provider>
  );
};
