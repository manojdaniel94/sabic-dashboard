import React, { useRef, useEffect } from "react";
import GraphicalOverview from "charts/GraphicalOverview";
import LiveModel from "table/LiveModel";
import "./AssetModel.scss"
import Graph from "../../../assets/images/Graph.png";
import Tooltipgraph from "../../../assets/images/tooltipgraph.png";
import { useDispatch, useSelector } from "react-redux";
import { getassetlistOfAssetModelByplantid, getAnomalyModelbyAssetId, getFailurepreDictionByAssetId, getGraphicalImageByAssetId, getAssetKPI } from "../../../redux/reducers/CommonReducer";


interface Props {
    buttonName: string;
    onClickHandler: any;
}

const AssetModel = () => {
    let dispatch = useDispatch();

    const { assetlistOfAssetModelByplantid, AnomalyModelbyAssetId, FailurepreDictionByAssetId, GraphicalImageByAssetId, AssetKPIForAssetModel } = useSelector((state: any) => ({
        assetlistOfAssetModelByplantid: state.Common.assetlistOfAssetModelByplantid,
        AnomalyModelbyAssetId: state.Common.AnomalyModelbyAssetId,
        FailurepreDictionByAssetId: state.Common.FailurepreDictionByAssetId,
        GraphicalImageByAssetId: state.Common.GraphicalImageByAssetId,
        AssetKPIForAssetModel: state.Common.AssetKPIForAssetModel,
    }));

    useEffect(() => {

        dispatch(getassetlistOfAssetModelByplantid("18"));    //selectedPlant.value
        dispatch(getAnomalyModelbyAssetId("18"));    //selectedPlant.value
        dispatch(getFailurepreDictionByAssetId("18"));    //selectedPlant.value
        dispatch(getGraphicalImageByAssetId("18"));    //selectedPlant.value
        dispatch(getAssetKPI("18"));    //selectedPlant.value

    }, []);

    // console.log("assetlistOfAssetModelByplantid",assetlistOfAssetModelByplantid);
    // console.log(" AnomalyModelbyAssetId", AnomalyModelbyAssetId);
    console.log(" AssetKPIForAssetModel", AssetKPIForAssetModel);

    return (
        <div id="asset-model">
            <div id="asset-model-left">
                <div className="asset-model-left-inner">
                    <div className="sensor-filter">
                        <div className="title">SENSOR PLOT</div>
                        <div className="sensor-options">
                            <select>
                                <option>Select Asset</option>
                                {assetlistOfAssetModelByplantid.map((item: any) => (
                                    <option>{item.assetId}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="asset-name">K-1701</div>
                    <div className="asset-plot-graph">
                        <GraphicalOverview
                            GraphicalImageByAssetId={GraphicalImageByAssetId}
                        />
                    </div>
                </div>
                <div className="asset-plot-status">
                    <div className="asset-plot-status-left">
                    {AssetKPIForAssetModel.map((item: any) => (
                        <div className="asset-efficiency hovermeyaar"><span className={item.kpiTrend === true ? "uparrow greeny" : "downarrow redy"}></span><span>{item.kpi}</span> <span className="amhi-slider"><i className="aafter" style={{ left: `${item.kpiPercent - 5}%` }}>{item.kpiPercent}%</i></span>
                            <div className="asset-status-tooltip centerarr"><div className="asset-tooltip-text"><h3>What is {item.kpi}?</h3><p>Description Here</p></div></div>
                        </div>
                    ))}
                    </div>
                    <div className="asset-plot-status-right hovermeyaar">
                        <div className="asset-status-graph"><a href="#"><img src={Graph} /></a>
                            <div className="asset-status-tooltip asg-pos"><div className="asp-graph"><img src={Tooltipgraph} /></div></div>                        
                        </div>
                    </div>
                    
                </div>
                {/* <div className="asset-plot-status">
                    <div>
                        {AssetKPIForAssetModel.map((item: any) => (
                            <div>
                                <div className="hover-text">
                                    <div><span className={item.kpiTrend === true ? "uparrow greeny" : "downarrow redy"}></span><span>{item.kpi}</span> <span className="amhi-slider"><i className="aafter" style={{ left: `${item.kpiPercent - 5}%` }}>{item.kpiPercent}%</i></span></div>
                                    <span className="tooltip-text" id="top">
                                        <span>{`What is ${item.kpi}?`}</span>
                                        <span>Description Here</span>
                                    </span>
                                </div>
                            </div>
                            
                        ))}
                    </div>


                    <div className="asset-status-graph"><img src={Graph} /></div>
                </div> */}
            </div>
            <div id="asset-model-right">
                <LiveModel
                    FailurepreDictionByAssetId={FailurepreDictionByAssetId}
                    AnomalyModelbyAssetId={AnomalyModelbyAssetId}
                />
            </div>
        </div>

    );
};

export default AssetModel;