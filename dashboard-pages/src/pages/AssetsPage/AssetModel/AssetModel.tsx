import React, { useRef, useEffect } from "react";
import GraphicalOverview from "charts/GraphicalOverview";
import LiveModel from "table/LiveModel";
import "./AssetModel.scss"
import Graph from "../../../assets/images/Graph.png";
import { useDispatch, useSelector } from "react-redux";
import { getassetlistOfAssetModelByplantid, getAnomalyModelbyAssetId, getFailurepreDictionByAssetId, getGraphicalImageByAssetId } from "../../../redux/reducers/CommonReducer";


interface Props {
    buttonName: string;
    onClickHandler: any;
}

const AssetModel = () => {
    let dispatch = useDispatch();

    const { assetlistOfAssetModelByplantid, AnomalyModelbyAssetId, FailurepreDictionByAssetId, GraphicalImageByAssetId } = useSelector((state: any) => ({
        assetlistOfAssetModelByplantid: state.Common.assetlistOfAssetModelByplantid,
        AnomalyModelbyAssetId: state.Common.AnomalyModelbyAssetId,
        FailurepreDictionByAssetId: state.Common.FailurepreDictionByAssetId,
        GraphicalImageByAssetId: state.Common.GraphicalImageByAssetId,
    }));

    useEffect(() => {
        
        dispatch(getassetlistOfAssetModelByplantid("18"));    //selectedPlant.value
        dispatch(getAnomalyModelbyAssetId("18"));    //selectedPlant.value
        dispatch(getFailurepreDictionByAssetId("18"));    //selectedPlant.value
        dispatch(getGraphicalImageByAssetId("18"));    //selectedPlant.value
       
    }, []);

    // console.log("assetlistOfAssetModelByplantid",assetlistOfAssetModelByplantid);
    // console.log(" AnomalyModelbyAssetId", AnomalyModelbyAssetId);
    // console.log(" FailurepreDictionByAssetId", FailurepreDictionByAssetId);

    return (
        <div id="asset-model">
            <div id="asset-model-left">
                <div className="asset-model-left-inner">
                    <div className="sensor-filter">
                        <div className="title">SENSOR PLOT</div>
                        <div className="sensor-options">
                            <select>
                                <option>Select Asset</option>
                            {assetlistOfAssetModelByplantid.map((item:any) => (
                                <option>{item.assetId}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                    <div className="asset-name">K-1701</div>
                    <div className="asset-plot-graph">
                        <GraphicalOverview 
                         GraphicalImageByAssetId = {GraphicalImageByAssetId}
                        />
                    </div>
                </div>
                <div className="asset-plot-status">
                    <div><span className="downarrow redy"></span><span>EFFICIENCY</span> <span className="amhi-slider"><i className="aafter" style={{ left: '30%' }}>30%</i></span></div>
                    <div><span className="downarrow redy"></span><span>PERFORMANCE</span> <span className="amhi-slider"><i className="aafter" style={{ left: '62%' }}>62%</i></span></div>
                    <div></div>
                    <div className="asset-status-graph"><img src={Graph} /></div>
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