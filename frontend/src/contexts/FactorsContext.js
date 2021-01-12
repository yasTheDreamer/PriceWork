import React, { useState, createContext } from "react";

export const factorsContext = createContext();

export const FactorsProvider = (props) => {
  const [Factors, setFactors] = useState([
    {
      title: "Salary",
      value: "",
      for: "Salary",
      type: "number",
      list: "",
    },
    {
      title: "Job",
      value: "",
      for: "Job",
      type: "text",
      list: "jobList",
    },
    {
      title: "State",
      value: "",
      for: "State",
      type: "text",
      list: "stateList",
    },
    {
      title: "City",
      value: "",
      for: "City",
      type: "text",
      list: "cityList",
    },
    {
      title: "ZipCode",
      value: "",
      for: "ZipCode",
      type: "number",
      list: "zipcodeList",
    },
  ]);

  return (
    <factorsContext.Provider value={[Factors, setFactors]}>
      {props.children}
    </factorsContext.Provider>
  );
};
