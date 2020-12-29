import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SummaryProvider } from "./contexts/SummaryContext";
import { RecordProvider } from "./contexts/RecordContext";

ReactDOM.render(
  <React.StrictMode>
    <RecordProvider>
      <SummaryProvider>
        <Router>
          <App />
        </Router>
      </SummaryProvider>
    </RecordProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
