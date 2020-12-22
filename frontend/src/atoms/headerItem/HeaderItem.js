import React from "react";

const HeaderItem = (props) => {
  return (
    <div className="header__item__container">
      <a href={props.link}>
        <h1>{props.headline}</h1>
      </a>
    </div>
  );
};

export default HeaderItem;
