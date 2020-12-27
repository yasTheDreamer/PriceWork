import React from "react";
import "./Style.css";
import Button from "../button/Button";

const FactorInput = (props) => {
  return (
    <div className="factorInput__container">
      <input
        type={props.type}
        placeholder="type your factor value"
        name={props.name}
        id="factor"
      />
    </div>
  );
};

export default FactorInput;
