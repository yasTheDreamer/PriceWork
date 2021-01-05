import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import { fetchDB } from "../../../api/userApi";
import { populateStateList } from "../../../utils/utilFunctions";
import {
  READ_DATA,
  SAVE_DATA,
  DEV_READ_DATA,
  DEV_SAVE_DATA,
  RAPID_API_KEY,
} from "../../../utils/env";
import User from "../../../models/User";

import { summaryContext } from "../../../contexts/SummaryContext";
import { recordContext } from "../../../contexts/RecordContext";
import { formController } from "../../../js/FormController";

const Button = (props) => {
  const [Summary, setSummary] = useContext(summaryContext);
  const [Record, setRecord] = useContext(recordContext);
  const [user] = useState(new User());
  const [opera, setOpera] = useState();

  const operation = () => {
    switch (opera) {
      case "read":
        fetchDB(DEV_READ_DATA).then((res) => {
          let summary = res.summary;
          setSummary({
            min: `${summary.min}`,
            max: `${summary.max}`,
            average: `${summary.averageSalary}`,
            total: `${summary.total}`,
          });
        });
        break;
      case "write":
        fetchDB(DEV_SAVE_DATA, Record).then(() => {
          fetchDB(DEV_READ_DATA).then((res) => {
            let summary = res.summary;
            setSummary({
              min: `${summary.min}`,
              max: `${summary.max}`,
              average: `${summary.averageSalary}`,
              total: `${summary.total}`,
            });
          });
        });
        break;
    }
  };

  const setUser = () => {
    setRecord(formController(user));
  };

  const populateLists = () => {
    const input = document.querySelector("#factor");

    switch (input.name) {
      case "State":
        populateStateList();
        break;
    }
  };

  const op = props.onClick;

  useEffect(() => {
    if (opera == "read") {
      operation();
      return;
    }
    if (opera == "write") {
      operation();
      return;
    }
  }, [opera]);

  useEffect(() => {
    console.log(Summary);
  }, [Summary]);

  return (
    <>
      <input
        type={props.type}
        value={props.value}
        id="factor__button"
        list={props.list}
        onClick={async () => {
          populateLists();
          setUser();
          await setOpera(props.operation);
          op();
        }}
      />
    </>
  );
};

export default Button;
