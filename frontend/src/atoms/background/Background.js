import React from "react";
import background from "../../assets/img/background.jpg";
import "./Style.css";

const Background = () => {
  return (
    <div className="img__container">
      <img src={background} alt="background" id="background__img" />
    </div>
  );
};

export default Background;
