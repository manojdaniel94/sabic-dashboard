import React, { useRef } from "react";
import "./CalendarComponet.scss"
import iconCalendar from "../../assets/images/icon_calendar.svg";

interface Props {
    buttonName: string;
    onClickHandler: any;

}

const CalendarComponent = () => {
    return (
        <div className="breadcrumb-right">
            <div id="calendar">
                <a href="#" className="customdate"><span>Today:</span> <span className="calen-date">Feb 7 - 11:13</span> <span className="calen-icon"><img src={iconCalendar} title="calendar" /></span></a>
                <a href="#" className="custom">1D</a><a href="#" className="custom">1M</a><a href="#" className="custom">3M</a><a href="#" className="custom">1Y</a><a href="#" className="custom">5Y</a>
                <a href="#" className="mobile-calendar"><img src={iconCalendar} title="calendar" /></a>
            </div>
        </div>

    );
};

export default CalendarComponent;