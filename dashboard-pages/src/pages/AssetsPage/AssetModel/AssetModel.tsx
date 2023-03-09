import React, { useRef, useEffect, useState } from "react";
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

    const [selectedAssetId, setSelectedAssetId] = useState<any>(18);

    let dispatch = useDispatch();

    const { assetlistOfAssetModelByplantid, AnomalyModelbyAssetId, FailurepreDictionByAssetId, GraphicalImageByAssetId, AssetKPIForAssetModel } = useSelector((state: any) => ({
        assetlistOfAssetModelByplantid: state.Common.assetlistOfAssetModelByplantid,
        AnomalyModelbyAssetId: state.Common.AnomalyModelbyAssetId,
        FailurepreDictionByAssetId: state.Common.FailurepreDictionByAssetId,
        GraphicalImageByAssetId: state.Common.GraphicalImageByAssetId,
        AssetKPIForAssetModel: state.Common.AssetKPIForAssetModel,
    }));

    // useEffect(() => {
    //     dispatch(getassetlistOfAssetModelByplantid("18"));    //selectedPlant.value
    //     dispatch(getAnomalyModelbyAssetId("18"));             //selectedAssetId.value
    //     dispatch(getFailurepreDictionByAssetId("18"));        //selectedAssetId.value
    //     dispatch(getGraphicalImageByAssetId("18"));           //selectedAssetId.value
    //     dispatch(getAssetKPI("18"));                          //selectedAssetId.value
    // }, []);
    useEffect(() => {
        dispatch(getassetlistOfAssetModelByplantid(selectedAssetId));    //selectedPlant.value
        dispatch(getAnomalyModelbyAssetId(selectedAssetId));             //selectedAssetId.value
        dispatch(getFailurepreDictionByAssetId(selectedAssetId));        //selectedAssetId.value
        dispatch(getGraphicalImageByAssetId(selectedAssetId));           //selectedAssetId.value
        dispatch(getAssetKPI(selectedAssetId));                          //selectedAssetId.value
    }, [selectedAssetId]);

    // console.log("assetlistOfAssetModelByplantid",assetlistOfAssetModelByplantid);
    // console.log(" GraphicalImageByAssetId=========", GraphicalImageByAssetId[0]);
    // console.log(" selected in dropdown", selected);

    return (
        <div id="asset-model">
            <div id="asset-model-left">
                <div className="asset-model-left-inner">
                    <div className="asset-sensor-filter">
                        <div className="title">GRAPHICAL OVERVIEW</div>
                        <div className="sensor-options">
                            <select
                              onChange={(e) => setSelectedAssetId(e.target.value)}
                            >
                                <option>Select Asset ID</option>
                                {assetlistOfAssetModelByplantid.map((item: any) => (
                                    <option value={item.assetId}>{item.assetId}</option>
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