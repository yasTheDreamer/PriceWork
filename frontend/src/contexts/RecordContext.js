import React, { useState, createContext } from "react";
import User from "../models/User";

export const recordContext = createContext();

export const RecordProvider = (props) => {
  const [Record, setRecord] = useState(new User());

  return (
    <recordContext.Provider value={[Record, setRecord]}>
      {props.children}
    </recordContext.Provider>
  );
};
