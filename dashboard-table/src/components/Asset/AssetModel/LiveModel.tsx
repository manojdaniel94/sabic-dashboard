import React, { useRef, useState } from "react";

interface Props {
    FailurepreDictionByAssetId: any[];
    AnomalyModelbyAssetId: any[];
}

const LiveModel = ({ FailurepreDictionByAssetId, AnomalyModelbyAssetId }: Props) => {

    const [showPanel, togglePanel] = useState<any>(false);
    const [showPanel2, togglePanel2] = useState<any>(false);
    
    
    return (
        <div>
            <div className="right-title">LIVE MODELS</div>
            <div className="right-asset-name">K-1701</div>
            <div className="accordian-title-active" onClick={() => togglePanel(!showPanel)}>Anomaly Model { showPanel === false ? <span>+</span> : <span>-</span>}</div>
            { showPanel === true ? 
            <div className="accordian-body">
                <div className="asset-model-health-index">
                    <div className="amhi-row-title">
                        <div>Model Name</div>
                        <div>Health Index %</div>
                    </div>
                    {AnomalyModelbyAssetId.map((item: any) => (
                        <div className="amhi-row">
                            <div>{item.sensorGroup}</div>
                            <div><span className={item.healthIndexTrend === true ? "uparrow greeny" : "downarrow redy"}></span> <span className="amhi-slider"><i className="abefore" style={{ left:`${item.healthIndex-25}%`}}>{item.healthIndex}%</i></span></div>
                        </div>
                    ))}
                </div>
            </div> : ""
            }
            <div className="accordian-title" onClick={() => togglePanel2(!showPanel2)}>Failure Prediction { showPanel2 === false ? <span>+</span> : <span>-</span>}</div>
            { showPanel2 === true ? 
            <div className="accordian-body">
                <div className="asset-model-failure-prediction">
                    <div className="amfp-row-title">
                        <div>MODEL NAME</div>
                        <div>RUL</div>
                        <div>CONFIDENCE FACTOR</div>
                    </div>
                    {FailurepreDictionByAssetId.map((item: any) => (
                        <div className="amfp-row">
                            <div>{item.modelName}</div>
                            <div>{item.rul}</div>
                            <div>{item.confidenceFactor}</div>
                        </div>
                    ))}

                </div>
            </div>:""}
        </div>

    );
};

export default LiveModel;