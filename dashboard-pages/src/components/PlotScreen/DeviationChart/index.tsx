import React, { useRef } from "react";

interface Props {
    buttonName: string;
    onClickHandler: any;
}
const DeviationChart = () => {
    return (
        <div id="sensor-plot-left">
            <div id="deviation-plot">
                <div className="sensor-filter">
                    <div className="title">DEVIATION PLOT</div>
                </div>
                <div className="asset-name">K-1701</div>
                <div className="sensor-plot-graph"></div>
            </div>

        </div>

    );
};

export default DeviationChart;