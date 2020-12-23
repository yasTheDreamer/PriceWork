import React from "react";
import CustomTitle from "../../atoms/customTitle/CustomTitle";
import FactorInput from "../../atoms/factorInput/FactorInput";

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
      </>
    );
  }
};

export default FormFragement;
