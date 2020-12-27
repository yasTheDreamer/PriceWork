import React from "react";
import "./Style.css";
import { fetchDB } from "../../../api/userApi";
import {
  READ_DATA,
  SAVE_DATA,
  DEV_READ_DATA,
  DEV_SAVE_DATA,
} from "../../../utils/env";
import User from "../../../models/User";

const Button = (props) => {
  let user = new User()
    .withSalary(1)
    .withCountry("USA")
    .withState("CA")
    .withJobTitle("tester")
    .withYearsOfExperience(1)
    .build();

  const operation = () => {
    switch (props.operation) {
      case "read":
        fetchDB(READ_DATA).then((res) => console.log(res));
        break;
      case "write":
        fetchDB(SAVE_DATA, user).then((res) => console.log(res));
        break;
    }
  };

  const op = props.onClick;

  return (
    <>
      <input
        type={props.type}
        value={props.value}
        id="factor__button"
        onClick={() => {
          operation();
          op();
        }}
      />
    </>
  );
};

export default Button;
