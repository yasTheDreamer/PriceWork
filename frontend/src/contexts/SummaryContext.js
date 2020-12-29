import React, { useState, createContext } from "react";

export const summaryContext = createContext();

export const SummaryProvider = (props) => {
  const [Summary, setSummary] = useState({
    min: 0,
    max: 0,
    average: 0,
    total: 0,
  });

  return (
    <summaryContext.Provider value={[Summary, setSummary]}>
      {props.children}
    </summaryContext.Provider>
  );
};
