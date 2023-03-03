import React, { useRef } from "react";
import GraphicalOverview from "charts/GraphicalOverview";
import LiveModel from "table/LiveModel";
import "./AssetModel.scss"
import Graph from "../../../assets/images/Graph.png";


interface Props {
    buttonName: string;
    onClickHandler: any;
}

const AssetModel = () => {
    return (
        <div id="asset-model">
            <div id="asset-model-left">
                <div className="asset-model-left-inner">
                    <div className="sensor-filter">
                        <div className="title">SENSOR PLOT</div>
                        <div className="sensor-options">
                            <select><option>Model</option></select></div>
                    </div>
                    <div className="asset-name">K-1701</div>
                    <div className="asset-plot-graph">
                        <GraphicalOverview />
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
                <LiveModel />
            </div>
        </div>

    );
};

export default AssetModel;