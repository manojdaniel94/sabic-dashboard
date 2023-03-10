import React, { useRef, useState, useEffect } from "react";
import iconCalendar from "../../../assets/images/icon_calendar.svg";
import CalendarPopup from "../../CalendarPopup";
import { useDispatch, useSelector } from "react-redux";

interface Props {
    buttonName: string;
    onClickHandler: any;
}
const DeviationNames = () => {

    const [showPicker, setShowPicker] = useState(false);

    const { measureFromDate, measureToDate, sensorFromDate, sensorToDate, commonFromDate,
        commonToDate, measureFromDateFormat, measureToDateFormat } = useSelector((state: any) => ({
            measureFromDate: state.Common.measureFromDate,
            measureToDate: state.Common.measureToDate,
            sensorFromDate: state.Common.sensorFromDate,
            sensorToDate: state.Common.sensorToDate,
            commonFromDate: state.Common.commonFromDate,
            commonToDate: state.Common.commonToDate,
            measureFromDateFormat: state.Common.measureFromDateFormat,
            measureToDateFormat: state.Common.measureToDateFormat,
        }));

    // useEffect(() => {
    //     if (measureFromDate !== "") {
    //         setLabelFromValueMeasure(moment(measureFromDate).format('d-M-yyyy'))
    //     }
    // }, [measureFromDate]);

    // useEffect(() => {
    //     if (measureToDate !== "") {
    //         setLabelToValueMeasure(moment(measureToDate).format('d-M-yyyy'))
    //     }
    // }, [measureToDate]);

    return (
        <div id="sensor-plot-right">
            <div id="measure-names">
                <div className="measure-filter">
                    <div className="right-title">MEASURE NAMES</div>
                    <a href="#" className="sensor-calendar">
                        <span>Date:</span> <span className="calen-date">{measureFromDateFormat} {measureToDateFormat}</span> <span className="calen-icon">
                            <img src={iconCalendar} title="calendar" onClick={() => setShowPicker(!showPicker)} /></span></a>
                </div>
                <div className="sensor-plot-list">
                    <div><span style={{ background: "#009FDF" }}></span><span>Distance</span></div>
                    <div><span style={{ background: "rgb(255, 174, 33)" }}></span><span>Warning Level</span></div>
                    <div><span style={{ background: "rgb(253, 52, 52)" }}></span><span>Alert Level</span></div>
                </div>
                {showPicker ? <CalendarPopup title={"Deviation"} /> : null}
            </div>
        </div>
    );
};

export default DeviationNames;