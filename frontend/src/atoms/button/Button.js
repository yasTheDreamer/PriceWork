import React from "react";
import "./Style.css";

const Button = (props) => {
  return (
    <>
      <input type={props.type} value={props.value} id="factor__button" />
    </>
  );
};

export default Button;
