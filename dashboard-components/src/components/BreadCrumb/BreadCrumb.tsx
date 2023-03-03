import React from "react";
import "./BreadCrumb.scss"
import iconCalendar from "../../assets/images/icon_calendar.svg";

const BreadCrumb = () => {

  return (

    <div className="breadcrumb-left"><a href="#">Home</a><span>|</span><a href="#">Yanpet</a><span>|</span><a href="#">Plant - 1</a><span>|</span><a href="#">K-1701</a><span className="active">|</span><a href="#" className="active">Asset Model</a></div>

  );
};

export default BreadCrumb;
