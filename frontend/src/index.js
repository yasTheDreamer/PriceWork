import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SummaryProvider } from "./contexts/SummaryContext";
import { RecordProvider } from "./contexts/RecordContext";
import { AddressProvider } from "./contexts/AddressContext";
import { FactorBuilderProvider } from "./contexts/CurrentFactorContext";

ReactDOM.render(
  <React.StrictMode>
    <RecordProvider>
      <SummaryProvider>
        <AddressProvider>
          <FactorBuilderProvider>
            <Router>
              <App />
            </Router>
          </FactorBuilderProvider>
        </AddressProvider>
      </SummaryProvider>
    </RecordProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
