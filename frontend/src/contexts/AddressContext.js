import React, { useState, createContext } from "react";

export const addressContext = createContext();

export const AddressProvider = (props) => {
  const [Address, setAddress] = useState({
    country: "US",
    state: null,
    city: null,
    zipcode: null,
  });

  return (
    <addressContext.Provider value={[Address, setAddress]}>
      {props.children}
    </addressContext.Provider>
  );
};
