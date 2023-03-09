import React, { useRef, useEffect, useState } from "react";
import "./MenuContainer.scss";

interface Props {
  data: any[];
  handleMenuClick: any;
  getSelectedclassName: any;
}

const MenuContainer = ({
  data,
  handleMenuClick,
  getSelectedclassName,
}: Props) => {
  return (
    <div id="pmt-menu">
      {data.map((item) => (
        <a
          id={item.id}
          key={item.id}
          className={`top-container-conten ${getSelectedclassName(item.id)}`}
          onClick={() => handleMenuClick(item.id)}
        >
          {item.value}
        </a>
      ))}
    </div>
  );
};

export default MenuContainer;
