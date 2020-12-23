import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
const HeaderItem = (props) => {
  return (
    <div className="header__item__container">
      <Link to={props.link} className="header__item__container--link">
        <h2 className="header__item__container--headline">{props.title}</h2>
      </Link>
    </div>
  );
};

export default HeaderItem;
