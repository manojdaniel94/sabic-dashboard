import React, { useRef, useState } from "react";
import "./CalendarComponet.scss"
import iconCalendar from "../../assets/images/icon_calendar.svg";
import CalendarPopup from "../CalendarPopup";
import { useDispatch, useSelector } from "react-redux";

interface Props {
    buttonName: string;
    onClickHandler: any;

}

const CalendarComponent = () => {
    const [showPicker, setShowPicker] = useState(false);
    const dateFilterList = ["1D", "1W", "1M", "3M", "1Y", "5Y"];

    const { measureFromDate, measureToDate, sensorFromDate, sensorToDate, commonFromDate,
        commonToDate, measureFromDateFormat, measureToDateFormat, sensorFromDateFormat, sensorToDateFormat, commonFromDateFormat, commonToDateFormat } = useSelector((state: any) => ({
            measureFromDate: state.Common.measureFromDate,
            measureToDate: state.Common.measureToDate,
            sensorFromDate: state.Common.sensorFromDate,
            sensorToDate: state.Common.sensorToDate,
            commonFromDate: state.Common.commonFromDate,
            commonToDate: state.Common.commonToDate,

            measureFromDateFormat: state.Common.measureFromDateFormat,
            measureToDateFormat: state.Common.measureToDateFormat,
            sensorFromDateFormat: state.Common.sensorFromDateFormat,
            sensorToDateFormat: state.Common.sensorToDateFormat,
            commonFromDateFormat: state.Common.commonFromDateFormat,
            commonToDateFormat: state.Common.commonToDateFormat,


        }));


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
                <a href="#" className="customdate" onClick={() => setShowPicker(!showPicker)}><span>Date:</span> <span className="calen-date" >{commonFromDateFormat} {commonToDateFormat}</span> <span className="calen-icon"><img src={iconCalendar} title="calendar" /></span></a>
                <a href="#" className="custom">1D</a><a href="#" className="custom">1M</a><a href="#" className="custom">3M</a><a href="#" className="custom">1Y</a><a href="#" className="custom">5Y</a>
                <a href="#" className="mobile-calendar"><img src={iconCalendar} title="calendar" /></a>
                {showPicker ? <CalendarPopup title={"common"} /> : null}
            </div>
        </div>

    );
};

export default CalendarComponent;