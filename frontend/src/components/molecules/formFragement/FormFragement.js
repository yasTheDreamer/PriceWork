import React from "react";
import CustomTitle from "../../atoms/customTitle/CustomTitle";
import FactorInput from "../../atoms/factorInput/FactorInput";
import { StepComponentProps } from "react-step-builder";
import Button from "../../atoms/button/Button";
import "./Style.css";

const FormFragement = (props) => {
  let element;

  if (props.value) {
    element = <CustomTitle for={props.for} title={props.value} />;
  } else {
    element = <FactorInput type={props.type} name={props.title} />;
  }
  if (props.value) {
    return (
      <div className="stats__container">
        <CustomTitle for={props.for} title={props.title} />
        {element}
      </div>
    );
  } else {
    return (
      <>
        <CustomTitle for={props.for} title={props.title} />
        {element}
        <div className="control__buttons">
          <Button
            type="button"
            value="back"
            operation="write"
            onClick={props.prev}
          />
          <Button
            type="button"
            value="next"
            operation="read"
            onClick={props.next}
          />
        </div>
      </>
    );
  }
};

export default FormFragement;
