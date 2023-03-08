import React, { useRef, useState } from "react";
import DatePickerComponent from "../DatePickerComponent";
import { useDispatch, useSelector } from "react-redux";
import {
    getMeasureFromDate,
    getMeasureToDate
} from '../../redux/reducers/CommonReducer';


const CalendarPopup = () => {

    let dispatch = useDispatch();

    const { measureFromDate, measureToDate } = useSelector((state: any) => ({
        measureFromDate: state.Common.measureFromDate,
        measureToDate: state.Common.measureToDate,
    }));

    const handleFromDateChanged = (date: any) => {
        dispatch(getMeasureFromDate(date));
        // setFromDate(date)
    }
    const handleToDateChanged = (date: any) => {
        dispatch(getMeasureToDate(date));
        // setToDate(date)
    }


    return (
        <>
            <div id="calendar-popup" className="cal-show">
                <div className="calendar-filter">
                    <div className="cf-left"><span>From</span>
                        <DatePickerComponent selectedDate={measureFromDate} handleDateChange={handleFromDateChanged} />
                    </div>
                    <div className="cf-right"><span>To</span>
                        <DatePickerComponent selectedDate={measureToDate} handleDateChange={handleToDateChanged} />
                    </div>
                </div>
                {/* <div className="calendar-others"><a href="#" className="custom">1D</a><a href="#" className="custom">1M</a><a href="#" className="custom">3M</a><a href="#" className="custom">1Y</a><a href="#" className="custom">5Y</a></div>
                <div className="calendar-date">Feb 23</div>
                <div className="calendar-box">
                    <DatePickerComponent />
                </div> */}
            </div>
        </>
    );
};

export default CalendarPopup;