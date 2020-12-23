import React from "react";
import "./Style.css";

const CustomTitle = (props) => {
  return (
    <label className="custom__title" htmlFor={props.for}>
      {props.title}
    </label>
  );
};

export default CustomTitle;
