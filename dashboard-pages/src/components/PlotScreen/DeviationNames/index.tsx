import React, { useRef, useState } from "react";
import iconCalendar from "../../../assets/images/icon_calendar.svg";
import CalendarPopup from "../../CalendarPopup";

interface Props {
    buttonName: string;
    onClickHandler: any;
}
const DeviationNames = () => {

    const [showPicker, setShowPicker] = useState(false);

    return (
        <div id="sensor-plot-right">
            <div id="measure-names">
                <div className="measure-filter">
                    <div className="right-title">MEASURE NAMES</div>
                    <a href="#" className="sensor-calendar">
                        <span>Today:</span> <span className="calen-date">Feb 7 - 11:13</span> <span className="calen-icon">
                            <img src={iconCalendar} title="calendar" onClick={() => setShowPicker(!showPicker)} /></span></a>
                </div>
                <div className="sensor-plot-list">
                    <div><span style={{ background: "#009FDF" }}></span><span>Distance</span></div>
                    <div><span style={{ background: "rgb(255, 174, 33)" }}></span><span>Warning Level</span></div>
                    <div><span style={{ background: "rgb(253, 52, 52)" }}></span><span>Alert Level</span></div>
                </div>
                {showPicker ? <CalendarPopup /> : null}
            </div>
        </div>
    );
};

export default DeviationNames;