import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getPlotModelDropDown,
    getPlotAssetDropDown,
    getPlotSensorDropDown,
    getPlotDeviationData,
    getPlotStatusData
} from '../../../redux/reducers/CommonReducer';
import '../../../assets/common/PlotScreen.scss';
import SensorChart from "../../../components/PlotScreen/SensorChart";
import SensorNames from "../../../components/PlotScreen/SensorNames";
import DeviationChart from "../../../components/PlotScreen/DeviationChart";
import DeviationNames from "../../../components/PlotScreen/DeviationNames";

interface Props {
    buttonName: string;
    onClickHandler: any;
}

const Plot = () => {

    let dispatch = useDispatch();

    const { plotModelDropDown, plotAssetDropDown, plotSensorDropDown, plotDeviationData, plotStatusData } = useSelector((state: any) => ({
        plotModelDropDown: state.Common.plotModelDropDown,
        plotAssetDropDown: state.Common.plotAssetDropDown,
        plotSensorDropDown: state.Common.plotSensorDropDown,
        plotDeviationData: state.Common.plotDeviationData,
        plotStatusData: state.Common.plotStatusData,
    }));

    useEffect(() => {
        dispatch(getPlotModelDropDown("18/18"));    //{assetId}/{userId}
        dispatch(getPlotAssetDropDown("18/18"));    //{plantId}/{userId}
        dispatch(getPlotSensorDropDown("18/18")); //{sensorGroupId}/{userId}
        dispatch(getPlotDeviationData("18/18/06-03-2023/06-03-2023")); //{assetId}/{userId}/{fromDate}/{toDate}
        dispatch(getPlotStatusData("18/18/06-03-2023/06-03-2023")); //{assetId}/{userId}/{fromDate}/{toDate}
    }, []);

    // console.log("Model Dropdown Data", plotModelDropDown);
    // console.log("Asset Dropdown Data", plotAssetDropDown);
    // console.log("Sensor Dropdown Data", plotSensorDropDown);
    // console.log("Deviation Data", plotDeviationData);
    // console.log("Status graph data", plotStatusData);


    return (
        <div>
            <div id="sensor">
                <div id="sensor-plot-left">
                    <div id="sensor-plot">
                        <div className="sensor-filter">
                            <div className="title">SENSOR PLOT</div>
                            <div className="sensor-time">
                                <div className="sensor-stamp"> <span>Time Stamp</span> <span>11:13 - 14 / 12 / 22</span></div>
                                <div className="sensor-deviation"><span>Model Deviation</span> <span>10%</span> </div>
                            </div>
                            <div className="sensor-options">
                                <select><option>Asset ID</option></select>
                                <select><option>Sensor</option></select>
                                <select><option>Model</option></select></div>
                        </div>
                        <div className="asset-name">K-1701</div>
                        <SensorChart />
                    </div>
                </div>
                <SensorNames />
            </div>
            <div id="sensor">
                <DeviationChart />
                <DeviationNames />
            </div>
        </div>

    );
};

export default Plot;