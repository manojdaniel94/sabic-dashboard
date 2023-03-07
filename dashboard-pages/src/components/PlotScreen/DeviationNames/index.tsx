import React, { useRef } from "react";
import iconCalendar from "../../../assets/images/icon_calendar.svg";

interface Props {
    buttonName: string;
    onClickHandler: any;
}
const DeviationNames = () => {
    return (
        <div id="sensor-plot-right">
            <div id="measure-names">
                <div className="right-title">MEASURE NAMES</div>
                <a href="#" className="sensor-calendar"><span>Today:</span> <span className="calen-date">Feb 7 - 11:13</span> <span className="calen-icon">
                    <img src={iconCalendar} title="calendar" /></span></a>
                <div className="sensor-plot-list">
                    <div><span style={{ background: "#009FDF" }}></span><span>Distance</span></div>
                    <div><span style={{ background: "rgb(255, 174, 33)" }}></span><span>Warning Level</span></div>
                    <div><span style={{ background: "rgb(253, 52, 52)" }}></span><span>Alert Level</span></div>
                </div>
            </div>
        </div>

    );
};

export default DeviationNames;