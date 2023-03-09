import React, { useRef, useState } from "react";
import '../../../assets/common/PmtDashboard.scss';
import imageHeatmap from "../../../assets/images/image_Heatmap.svg";
import icon_health_index_up_arrow from "../../../assets/images/icon_health_index_up_arrow.svg";
import icon_health_index_down_arrow from "../../../assets/images/icon_health_index_down_arrow.svg";


interface Props {
    statusData: any,
    toolTipData: any[],
    selectedHeatStatus: any
    setMouseHover: any
    mouseHover: any
}

const ReliablityHeatMap = ({ statusData,
    toolTipData,
    selectedHeatStatus,
    setMouseHover,
    mouseHover }: Props) => {

    return (
        <div className="pmt-health-index">
            <div className="pmt-heatmap">
                <img src={imageHeatmap} />
            </div>
            <div className="pmt-heatmapvalues">
                <div className="hi-value1">
                    <span className="hi-numbers hi-off"
                        onMouseOver={() => {
                            setMouseHover({
                                ...mouseHover, over: true,
                                statusName: "Asset-off"
                            })
                        }}
                        onMouseLeave={() => setMouseHover(false)}
                    >
                        <div className={`hi-popup hi-pos-off ${(mouseHover.statusName === "Asset-off" && selectedHeatStatus === "Asset-off") || (mouseHover.statusName === "Asset-off" && selectedHeatStatus === "All") ? 'show' : 'hidden'}`}>
                            <h3>HEALTH INDEX </h3>
                            <div className="hi-popbox">
                                {toolTipData.map((item) => (
                                    <div className="hi-popuprow"><span>{item.assetId}</span><span><i><img src={icon_health_index_down_arrow} /></i>{item.assetHealthIndex}%</span></div>
                                ))}
                            </div>
                        </div>
                        {selectedHeatStatus === "Asset-off" || selectedHeatStatus === "" || selectedHeatStatus === "All" ? statusData.assetOff.value : 0}</span><span className="hi-name">Asset-Off</span><span className="hi-status">Off</span></div>
                <div className="hi-value2">
                    <span className="hi-numbers hi-normal"
                        onMouseOver={() => {
                            setMouseHover({
                                ...mouseHover, over: true,
                                statusName: "Normal"
                            })
                        }}
                        onMouseLeave={() => setMouseHover(false)}
                    >
                        <div className={`hi-popup hi-pos-normal ${(mouseHover.statusName === "Normal" && selectedHeatStatus === "Normal") || (mouseHover.statusName === "Normal" && selectedHeatStatus === "All") ? 'show' : 'hidden'}`}>
                            <h3>HEALTH INDEX </h3>
                            <div className="hi-popbox">
                                {toolTipData.map((item) => (
                                    <div className="hi-popuprow"><span>{item.assetId}</span><span><i><img src={icon_health_index_up_arrow} /></i>{item.assetHealthIndex}%</span></div>
                                ))}
                            </div>
                        </div> {selectedHeatStatus === "Normal" || selectedHeatStatus === "" || selectedHeatStatus === "All" ? statusData.warning.value : 0}</span><span className="hi-name">Normal</span><span className="hi-status">Health Index &gt; 70%</span></div>


                <div className="hi-value3"><span className="hi-numbers hi-warning"
                    onMouseOver={() => setMouseHover({
                        ...mouseHover, over: true, statusName: "Warning"
                    })}
                    onMouseLeave={() => setMouseHover(false)}
                >
                    <div className={`hi-popup hi-pos-warning ${(mouseHover.statusName === "Warning" && selectedHeatStatus === "Warning") || (mouseHover.statusName === "Warning" && selectedHeatStatus === "All") ? 'show' : 'hidden'}`}>
                        <h3>HEALTH INDEX </h3>
                        <div className="hi-popbox">
                            {toolTipData.map((item) => (
                                <div className="hi-popuprow"><span>{item.assetId}</span><span><i><img src={icon_health_index_up_arrow} /></i>{item.assetHealthIndex}%</span></div>
                            ))}
                        </div>
                    </div>  {selectedHeatStatus === "Warning" || selectedHeatStatus === "" || selectedHeatStatus === "All" ? statusData.normal.value : 0}</span><span className="hi-name">Warning</span><span className="hi-status">Health Index &lt; 70%</span></div>


                <div className="hi-value4"><span className="hi-numbers hi-risk"
                    onMouseOver={() => setMouseHover({
                        ...mouseHover, over: true, statusName: "Asset Under Risk"
                    })}
                    onMouseLeave={() => setMouseHover(false)}
                >
                    <div className={`hi-popup hi-pos-risk ${(mouseHover.statusName === "Asset Under Risk" && selectedHeatStatus === "Asset Under Risk") || (mouseHover.statusName === "Asset Under Risk" && selectedHeatStatus === "All") ? 'show' : 'hidden'}`}>
                        <h3>HEALTH INDEX </h3>
                        <div className="hi-popbox">
                            {toolTipData.map((item) => (
                                <div className="hi-popuprow"><span>{item.assetId}</span><span><i><img src={icon_health_index_down_arrow} /></i>{item.assetHealthIndex}%</span></div>
                            ))}
                        </div>
                    </div>
                    {selectedHeatStatus === "Asset Under Risk" || selectedHeatStatus === "" || selectedHeatStatus === "All" ? statusData.assetUnderRisk.value : 0}</span><span className="hi-name">Asset Under Risk</span><span className="hi-status">Health Index Under Risk</span></div>
            </div>

        </div >
    );
};

export default ReliablityHeatMap;

//&& selectedHeatStatus === "Asset-off"
//&& selectedHeatStatus === "Normal"