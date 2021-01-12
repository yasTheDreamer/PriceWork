import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import { fetchDB } from "../../../api/userApi";
import {
  READ_DATA,
  SAVE_DATA,
  DEV_READ_DATA,
  DEV_SAVE_DATA,
} from "../../../utils/env";
import { isSelected } from "../../../utils/utilFunctions";
import User from "../../../models/User";

import { summaryContext } from "../../../contexts/SummaryContext";
import { recordContext } from "../../../contexts/RecordContext";
import { addressContext } from "../../../contexts/AddressContext";
import {
  formController,
  formControlWithoutBuild,
} from "../../../js/FormController";
import { factorBuilderContext } from "../../../contexts/CurrentFactorContext";

const Button = (props) => {
  const [Summary, setSummary] = useContext(summaryContext);
  const [Record, setRecord] = useContext(recordContext);
  const [Address, setAddress] = useContext(addressContext);
  const [factorBuilder, setfactorBuilder] = useContext(factorBuilderContext);

  const [user] = useState(new User());
  const [opera, setOpera] = useState();

  const operation = () => {
    switch (opera) {
      case "read":
        fetchDB(DEV_READ_DATA, factorBuilder.build()).then((res) => {
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
        fetchDB(DEV_SAVE_DATA, null, Record).then(() => {
          fetchDB(DEV_READ_DATA, factorBuilder.build()).then((res) => {
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

  const setAddressValues = () => {
    const input = document.querySelector("#factor");
    switch (input.name) {
      case "State":
        if (input.value) {
          const isoCode = document
            .querySelector(`#${input.value}`)
            .getAttribute("class");

          setAddress({
            ...Address,
            state: isoCode,
          });
        }
        break;
      case "City":
        if (input.value) {
          setAddress({
            ...Address,
            city: input.value,
          });
        }
    }
  };

  const buildFacotorQuery = () => {
    setfactorBuilder(formControlWithoutBuild(factorBuilder));
  };

  const setUser = () => {
    setRecord(formController(user));
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

  return (
    <>
      <input
        type={props.type}
        value={props.value}
        id="factor__button"
        onClick={async () => {
          if (isSelected()) {
            setUser();
            setAddressValues();
            buildFacotorQuery();
            await setOpera(props.operation);
            op();
          } else if (props.value == "back") {
            op();
          } else {
            const error = document.querySelector("#error");
            error.removeAttribute("hidden");
          }
        }}
      />
    </>
  );
};

export default Button;
