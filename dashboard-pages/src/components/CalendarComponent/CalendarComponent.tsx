import React, { useRef, useState } from "react";
import "./CalendarComponet.scss"
import iconCalendar from "../../assets/images/icon_calendar.svg";
import CalendarPopup from "../CalendarPopup";

interface Props {
    buttonName: string;
    onClickHandler: any;

}

const CalendarComponent = () => {
    const [showPicker, setShowPicker] = useState(true);
    const dateFilterList = ["1D", "1W", "1M", "3M", "1Y", "5Y"];


    const onClickDate = (item: any) => {
        const currentdate = new Date();
        let updatedDate: any;
        let disable = true;
        const dayFilter = item;
        console.log(dayFilter);


        if (dayFilter === "1D") {
            console.log("Clicked 1D");
            updatedDate = new Date(currentdate.setDate(currentdate.getDate() - 1));
        } else if (dayFilter === "1W") {
            console.log("Clicked 1W");
            updatedDate = new Date(currentdate.getTime() - 6 * 24 * 60 * 60 * 1000);
        } else if (dayFilter === "1M") {
            console.log("Clicked 1M");
            updatedDate = new Date(currentdate.setMonth(currentdate.getMonth() - 1));
        } else if (dayFilter === "3M") {
            console.log("Clicked 3M");
            updatedDate = new Date(currentdate.setMonth(currentdate.getMonth() - 3));
        } else if (dayFilter === "1Y") {
            console.log("Clicked 1Y");
            updatedDate = new Date(
                currentdate.setFullYear(currentdate.getFullYear() - 1)
            );
        } else if (dayFilter === "5Y") {
            console.log("Clicked 5Y");
            updatedDate = new Date(
                currentdate.setFullYear(currentdate.getFullYear() - 5)
            );
        }
        console.log(updatedDate);
        // console.log(disable);
        //  setDisabled(disable);
        //  setFromDate(updatedDate);
    };
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