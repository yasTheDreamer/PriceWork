import React from "react";
import background from "../../../assets/img/background.jpg";
import BackgroundLayer from "./BackgroundLayer";
import "./Style.css";

const Background = () => {
  return (
    <div className="img__container">
      <BackgroundLayer />
      <img src={background} alt="background" id="background__img" />
    </div>
  );
};

export default Background;
