import React, { useState } from "react";

import HeaderItem from "../../atoms/headerItem/HeaderItem";
import "./Style.css";

const HeaderItems = () => {
  const [Items, setItems] = useState([
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About",
      link: "#",
    },
  ]);

  return (
    <div className="headerItems__container">
      {Items.map((item, i) => {
        return <HeaderItem key={i} link={item.link} title={item.title} />;
      })}
    </div>
  );
};

export default HeaderItems;
