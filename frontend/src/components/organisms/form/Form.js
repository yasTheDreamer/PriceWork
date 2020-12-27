import React, { useState } from "react";
import FormFragement from "../../molecules/formFragement/FormFragement";
import FactorPlusIcon from "../../atoms/factorPlusIcon/FactorPlusIcon";
import Button from "../../atoms/button/Button";
import "./Style.css";
import { Steps, Step, StepComponentProps } from "react-step-builder";

const Form = () => {
  const [factor, setFactor] = useState([
    {
      title: "Salary",
      value: "",
      for: "Salary",
      type: "number",
    },
    {
      title: "Job",
      value: "",
      for: "Job",
      type: "text",
    },
    {
      title: "Country",
      value: "",
      for: "Country",
      type: "text",
    },
  ]);

  const [stats, setStats] = useState([
    {
      text: "min",
      value: "10",
    },
    {
      text: "max",
      value: "11",
    },
    {
      text: "average",
      value: "12",
    },
    {
      text: "Total records",
      value: "14",
    },
  ]);

  return (
    <div className="form__container">
      <div className="main__form">
        {/* <FactorPlusIcon /> */}
        <Steps>
          {factor.map((f) => {
            return <Step title={f.title} component={FormFragement} />;
          })}
        </Steps>

        <div className="formFragement__container">
          {stats.map((stat, i) => {
            return <FormFragement title={stat.text} value={stat.value} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
