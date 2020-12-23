import React, { useState } from "react";
import FormFragement from "../../molecules/formFragement/FormFragement";
import FactorPlusIcon from "../../atoms/factorPlusIcon/FactorPlusIcon";
import Button from "../../atoms/button/Button";
import "./Style.css";

const Form = () => {
  const [factor, setFactor] = useState([
    {
      title: "Salary",
      value: "",
      for: "Salary",
      type: "number",
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
        <FactorPlusIcon />
        <form className="main__form--form" id="main__form--form">
          <FormFragement
            for={factor[0].for}
            title={factor[0].title}
            value={factor[0].value}
            type={factor[0].type}
          />
        </form>

        <div className="formFragement__container">
          {stats.map((stat, i) => {
            return <FormFragement title={stat.text} value={stat.value} />;
          })}
        </div>
        <div className="control__buttons">
          <Button type="button" value="back" />
          <Button type="button" value="next" />
        </div>
      </div>
    </div>
  );
};

export default Form;
