import React from "react";
import "./BreadCrumb.scss";
import iconCalendar from "../../assets/images/icon_calendar.svg";

const BreadCrumb = () => {
  return (
    <div className="breadcrumb-left">
      <a href="#">Home</a>
      <span>|</span>
      <a href="#">Yanpet</a>
      <span>|</span>
      <a href="#" className="active">
        Poly 2
      </a>
    </div>
  );
};

export default BreadCrumb;
