import React, { useRef, useState } from "react";
import "./Status.scss"

import iconAffiliates from "../../assets/images/icon_Affiliates.svg";
import iconAssets from "../../assets/images/icon_Assets.svg";
import iconHealthIndex from "../../assets/images/icon_Health_Index.svg";
import iconProfile from "../../assets/images/icon_PM_Compliance.svg";
import imagePMCompliance from "../../assets/images/icon_Spares_Availability.svg";
import imageActive from "../../assets/images/icon_Active.svg";
import imageOverdue from "../../assets/images/icon_Overdue.svg";
import imageUnderInvestigate from "../../assets/images/icon_Under_Investigate.svg";

interface Props {
    data: any[];
    page: string;
    healthIndex: any[];
}

const Status = ({ data, page, healthIndex }: Props) => {
    const [mouseHoverTooltip, setMouseHoverTooltip] = useState<any>(false)
    // console.log("healthIndex for PLANT", healthIndex)
    return (
        <>
            {page === "PLANT" ?
                <>
                    {data && data.length > 0 ?
                        <div id="status">
                            <div className="common">
                                <div><div><img src={iconAffiliates} title="Affiliates" /></div><div><span id="value">{data[0].affiliateCount}</span><span>AFFILIATES</span></div></div>
                                <div><div><img src={iconAssets} title="Assets" /></div><div><span id="value2">{data[0].assetCount}</span><span>ASSETS</span></div></div>
                                <div onMouseOver={() => setMouseHoverTooltip(true)} onMouseLeave={() => setMouseHoverTooltip(false)}><div><img src={iconHealthIndex} title="Health_Index" /></div><div><span>{data[0].healthIndex}%</span><span>HEALTH INDEX</span></div>
                                    {mouseHoverTooltip === true ?
                                        <div className="status-tooltip">
                                            <div className="status-tooltip-head"><span>HEALTH INDEX</span><span>{healthIndex[0].PlantHealth}%</span></div>
                                            <div className="status-tooltip-box">
                                                {healthIndex.map((item) => (
                                                    <div className="status-tooltiprow"><span>{item.AssetId}</span><span className="st-u">{item.PlantHealth}%</span></div>
                                                ))}
                                                {/* <div className="status-tooltiprow"><span>K-18022</span><span className="st-d">50%</span></div>
                                            <div className="status-tooltiprow"><span>K-16033</span><span className="st-u">90%</span></div>
                                            <div className="status-tooltiprow"><span>K-16033</span><span className="st-u">90%</span></div>
                                            <div className="status-tooltiprow"><span>K-16040</span><span className="st-u">30%</span></div>
                                            <div className="status-tooltiprow"><span>K-18022</span><span className="st-d">50%</span></div>
                                            <div className="status-tooltiprow"><span>K-16033</span><span className="st-d">90%</span></div>
                                            <div className="status-tooltiprow"><span>K-16033</span><span className="st-d">90%</span></div> */}
                                            </div>
                                        </div> : ""
                                    }

                                </div>
                                <div><div><img src={iconProfile} title="PM_Compliance" /></div><div><span id="value4">{data[0].pmCompliance}<i> PM</i></span><span>COMPLIANCE</span></div></div>
                                <div><div><img src={imagePMCompliance} title="Spares_Availability" /></div><div><span id="value4">{data[0].spare} <i>SPARES</i></span><span>AVAILABILITY</span></div></div>
                                <div><div><img src={imageActive} title="Active" /></div><div><span id="value2" style={{
                                    color
                                        : 'red'
                                }}>{data[0].active}</span><span>ACTIVE</span></div></div>
                                <div><div><img src={imageUnderInvestigate} title="Under_Investigate" /></div><div><span id="value2">{data[0].underInvestigation}<i> UNDER</i></span><span>INVESTIGATION</span></div></div>
                                <div><div><img src={imageOverdue} title="Overdue_Investigate" /></div><div><span id="value2" style={{
                                    color
                                        : 'red'
                                }}> {data[0].overdueInvestigation}<i> OVERDUE</i></span><span>INVESTIGATION</span></div></div>
                            </div>
                        </div>
                        : null
                    }
                </>
                : null
            }
        </>
    );
};

export default Status;