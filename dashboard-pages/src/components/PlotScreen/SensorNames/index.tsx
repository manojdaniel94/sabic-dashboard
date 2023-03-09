import React, { useRef, useState } from "react";
import iconCalendar from "../../../assets/images/icon_calendar.svg";
import CalendarPopup from "../../CalendarPopup";

interface Props {
    data: any[];
}
const SensorNames = ({ data }: Props) => {
    const [showPicker, setShowPicker] = useState(false);
    return (
        <div id="sensor-plot-right">
            <div id="sensor-names">
                <div className="right-title">SENSOR NAME</div>
                <a href="#" className="sensor-calendar"><span>Today:</span> <span className="calen-date">Feb 7 - 11:13</span> <span className="calen-icon">
                    <img src={iconCalendar} title="calendar" onClick={() => setShowPicker(!showPicker)} /></span></a>
                <div className="sensor-plot-list">
                    {data.map((item) => (
                        <div><span style={{ background: "#009FDF" }}></span><span>{item.label}</span></div>
                    ))}
                    {/* <div><span style={{ background: "#009FDF" }}></span><span>Temperature</span></div>
                    <div><span style={{ background: "rgb(247, 61, 163)" }}></span><span>Power</span></div>
                    <div><span style={{ background: "rgb(193, 9, 110)" }}></span><span>Pressure</span></div> */}
                </div>
                {showPicker ? <CalendarPopup title={"Sensor"} /> : null}
            </div>
        </div>

    );
};

export default SensorNames;