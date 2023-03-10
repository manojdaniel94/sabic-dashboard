import React, { useRef, useState,useEffect } from "react";
import pucurve from "../../../assets/images/pucurve.png";
import Heatmap from "../../../assets/images/image_Heatmap.svg";
import ImgGraphYellow from "../../../assets/images/img_graph_yellow_circle.svg";
import ImgGraphGreen from "../../../assets/images/img_graph_green_circle.svg";
import ImgGraphRed from "../../../assets/images/img_graph_red_circle.svg";
import {getSensorGroupId} from "../../../../../dashboard-pages/src/redux/reducers/CommonReducer";
// import { useDispatch, useSelector } from "react-redux";

interface Props {
    FailurepreDictionByAssetId: any[];
    AnomalyModelbyAssetId: any[];
    setSensorGroupId :any;
}

const LiveModel = ({ FailurepreDictionByAssetId, AnomalyModelbyAssetId, setSensorGroupId }: Props) => {

    const [showPanel, togglePanel] = useState<any>(false);
    const [showPanel2, togglePanel2] = useState<any>(false);
    const [showPopup, setShowPopup] = useState<any>(false);
    const [showPopupData, setShowPopupData] = useState<any>();
    const [selected, setSelected] = useState<any>("");
    const [showToggle, setToggle] = useState<any>(false);
    const [selectedsensorGroupId, setSelectedsensorGroupId] = useState<any>(""); 

    // let dispatch = useDispatch();

    

    const openAssetPopup = (data: any) => {
        setShowPopup(true);
        setShowPopupData(data)
    }

    const openFailureDictionPopupDropdown = (data:any)=>{
        const getData = FailurepreDictionByAssetId.filter(({ modelName }) => modelName === data);
        setShowPopup(true);
        setShowPopupData(getData[0]);
    }

    const getFunctionAnomalyid = (data:any)=>{
        setSelectedsensorGroupId(data);
        console.log("showToggle",showToggle);
        showToggle === false ? setSensorGroupId(data) : setSensorGroupId("");
    }

    const getSelectedclassName = (id: any) => showToggle=== true  ? selectedsensorGroupId === id ? "getactive" : "setactive" : "";
        

    

    // useEffect(() => {
    //     [].slice.call(country.options)
    //     .map(function(a){
    //       if(this[a.innerText]){ 
    //         country.removeChild(a); 
    //       } else { 
    //         this[a.innerText]=1; 
    //       } 
    //     },{});  
    // }, []);
    

    const getTopPosition = (data: any) => {
        if (data >= 0 && data <= 30) {
            return 70 + (data * 5);
        } else if (data === 31 || data === 32 || data === 31) {
            return 60;
        } else if (data === 34 || data === 35 || data === 36) {
            return 50;
        } else if (data === 37 || data === 38 || data === 39) {
            return 40;
        } else if (data === 40 || data === 41 || data === 42) {
            return 30;
        } else if (data === 43 || data === 44 || data === 45) {
            return 25;
        } else if (data === 46 || data === 47 || data === 48) {
            return 20;
        } else if (data === 49 || data === 50 || data === 51 || data === 52 || data === 53 || data === 54 || data === 55) {
            return 10;
        } else if (data === 56 || data === 60 || data === 61 || data === 62 || data === 63 || data === 64 || data === 65 || data === 66) {
            return 0;
        } else {
            return -10;
        }
    }

    return (
        <div>
            <div className="right-title">LIVE MODELS</div>
            <div className="right-asset-name">2Y-3001A</div>
            <div className="accordian-title-active" onClick={() => togglePanel(!showPanel)}>Anomaly Model {showPanel === false ? <span>+</span> : <span>-</span>}</div>
            {showPanel === true ?
                <div className="accordian-body">
                    <div className="asset-model-health-index">
                        <div className="amhi-row-title">
                            <div>Model Name</div>
                            <div>Health Index %</div>
                        </div>
                        {AnomalyModelbyAssetId.map((item: any) => (
                            <div id = {item.sensorGroupId} className={`amhi-row ${getSelectedclassName(item.sensorGroupId)}`} onClick={() => {getFunctionAnomalyid(item.sensorGroupId); setToggle(!showToggle)}}>
                                <div>{item.sensorGroup}</div>
                                <div><span className={item.healthIndexTrend === true ? "uparrow greeny" : "downarrow redy"}></span> <span className="amhi-slider"><i className="abefore" style={{ left: `${item.healthIndex - 25}%` }}>{item.healthIndex}%</i></span></div>
                            </div>
                        ))}
                    </div>
                </div> : ""
            }
            <div className="accordian-title" onClick={() => togglePanel2(!showPanel2)}>Failure Prediction {showPanel2 === false ? <span>+</span> : <span>-</span>}</div>
            {showPanel2 === true ?
                <div className="accordian-body">
                    <div className="asset-model-failure-prediction">
                        <div className="amfp-row-title">
                            <div>MODEL NAME</div>
                            <div>RUL</div>
                            <div>CONFIDENCE FACTOR</div>
                        </div>
                        {FailurepreDictionByAssetId.map((item: any) => (
                            <>
                                <div className="amfp-row" onClick={() => openAssetPopup(item)}>
                                    <div>{item.modelName}</div>
                                    <div>{item.rul}</div>
                                    <div>{item.confidenceFactor}</div>
                                </div>


                            </>
                        ))}

                    </div>
                    {showPopup === true && showPopupData !== null ?
                        <div id="asset-popup">
                            <div id="ap-content">
                                <span onClick={() => setShowPopup(false)} style={{ float: "right", fontSize: "50px",cursor: "pointer"}}>x</span>
                                <div className="ap-filter">
                                    <div className="ap-title">P-F-CURVE</div>
                                    <div className="ap-dropdown">
                                        <select id="ap-dropdown"
                                            onChange={(e) => openFailureDictionPopupDropdown(e.target.value)}
                                        >
                                            <option value={showPopupData.modelName}>{showPopupData.modelName}</option>
                                           
                                            {FailurepreDictionByAssetId.map((item: any) => (
                                                <option value={item.modelName}>{item.modelName}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="ap-asset-name">{showPopupData.modelName}</div>
                                <div id="ap-heatmap">
                                    <span className="ap-heatmap-label"><img src={pucurve} /></span>
                                    <span className="ap-heatmap-img"><img src={Heatmap} className="ahmi" />

                                        <span className="position" style={{ top: `${getTopPosition(showPopupData.rul * 10)}px`, right: `${showPopupData.rul * 10}%` }}><img src={ImgGraphYellow} /><i style={{ top: "145px" }}>{showPopupData.rul}</i></span>
                                        <span className="max-position"><img src={ImgGraphGreen} /></span>
                                        <span className="min-position"><img src={ImgGraphRed} /></span>

                                    </span>
                                </div>

                            </div>
                        </div> : ""
                    }
                </div> : ""}
        </div>

    );
};

export default LiveModel;