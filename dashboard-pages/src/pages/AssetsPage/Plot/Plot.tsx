import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getPlotModelDropDown,
    getPlotAssetDropDown,
    getPlotSensorDropDown,
    getPlotDeviationData,
    getPlotStatusData
} from '../../../redux/reducers/CommonReducer';

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

    console.log("Model Dropdown Data", plotModelDropDown);
    console.log("Asset Dropdown Data", plotAssetDropDown);
    console.log("Sensor Dropdown Data", plotSensorDropDown);
    console.log("Deviation Data", plotDeviationData);
    console.log("Status graph data", plotStatusData);


    return (
        <div>
            Plot
        </div>

    );
};

export default Plot;