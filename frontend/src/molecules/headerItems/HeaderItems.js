import React, { useState } from "react";

import HeaderItem from "../../atoms/headerItem/HeaderItem";

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
      {Items.forEach((Item) => {
        return <HeaderItem link={Item.link} title={Item.title} />;
      })}
    </div>
  );
};

export default HeaderItems;
