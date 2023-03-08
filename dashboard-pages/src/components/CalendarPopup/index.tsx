import React, { useRef, useState } from "react";
import DatePickerComponent from "../DatePickerComponent";
import { useDispatch, useSelector } from "react-redux";
import {
    getMeasureFromDate,
    getMeasureToDate,
    getSensorFromDate,
    getSensorToDate
} from '../../redux/reducers/CommonReducer';



interface Props {
    title: string;
}

const CalendarPopup = ({ title }: Props) => {

    let dispatch = useDispatch();

    const { measureFromDate, measureToDate, sensorFromDate, sensorToDate, commonFromDate,
        commonToDate } = useSelector((state: any) => ({
            measureFromDate: state.Common.measureFromDate,
            measureToDate: state.Common.measureToDate,
            sensorFromDate: state.Common.sensorFromDate,
            sensorToDate: state.Common.sensorToDate,
            commonFromDate: state.Common.commonFromDate,
            commonToDate: state.Common.commonToDate,
        }));

    const handleFromDateChanged = (date: any) => {
        switch (title) {
            case "Deviation":
                dispatch(getMeasureFromDate(date));
                break;
            case "Sensor":
                dispatch(getSensorFromDate(date));
                break;
        }

        // setFromDate(date)
    }
    const handleToDateChanged = (date: any) => {
        switch (title) {
            case "Deviation":
                dispatch(getMeasureToDate(date));
                break;
            case "Sensor":
                dispatch(getSensorToDate(date));
                break;
        }

        // setToDate(date)
    }


    return (
        <>
            <div id="calendar-popup" className="cal-show">
                <div className="calendar-filter">
                    <div className="cf-left"><span>From</span>
                        <DatePickerComponent
                            selectedDate={title === "Deviation" ?
                                measureFromDate : title === "Sensor" ?
                                    sensorFromDate : commonFromDate}
                            handleDateChange={handleFromDateChanged} />
                    </div>
                    <div className="cf-right"><span>To</span>
                        <DatePickerComponent selectedDate={title === "Deviation" ?
                            measureToDate : title === "Sensor" ? sensorToDate : commonToDate}
                            handleDateChange={handleToDateChanged} />
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