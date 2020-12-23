import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
const FactorPlusIcon = () => {
  return (
    <div className="icon__container">
      <FontAwesomeIcon icon={faPlusSquare} />
    </div>
  );
};

export default FactorPlusIcon;
