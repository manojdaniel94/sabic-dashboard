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
import Dropdown from "components/Dropdown";
import moment from 'moment'

interface Props {
    buttonName: string;
    onClickHandler: any;
}

const Plot = () => {

    let dispatch = useDispatch();
    const [assetData, setAssetData] = useState<any>("")
    const [modelData, setModelData] = useState<any>("")
    const [sensorData, setSensorData] = useState<any>("")

    const [selectedAsset, setSelectedAsset] = useState<any>("")
    const [selectedModel, setSelectedModel] = useState<any>("")
    const [selectedSensor, setSelectedSensor] = useState<any>([])

    const { plotModelDropDown, plotAssetDropDown, plotSensorDropDown, plotDeviationData, plotStatusData, measureFromDate, measureToDate } = useSelector((state: any) => ({
        plotModelDropDown: state.Common.plotModelDropDown,
        plotAssetDropDown: state.Common.plotAssetDropDown,
        plotSensorDropDown: state.Common.plotSensorDropDown,
        plotDeviationData: state.Common.plotDeviationData,
        plotStatusData: state.Common.plotStatusData,
        measureFromDate: state.Common.measureFromDate,
        measureToDate: state.Common.measureToDate,
    }));

    useEffect(() => {
        dispatch(getPlotModelDropDown("18/18"));    //{assetId}/{userId}
        dispatch(getPlotAssetDropDown("18/18"));    //{plantId}/{userId}
        // dispatch(getPlotSensorDropDown("18/18")); //{sensorGroupId}/{userId}
        // dispatch(getPlotDeviationData("18/18/06-03-2023/06-03-2023")); //{assetId}/{userId}/{fromDate}/{toDate}
        dispatch(getPlotStatusData("18/18/06-03-2023/06-03-2023")); //{assetId}/{userId}/{fromDate}/{toDate}
    }, []);



    useEffect(() => {
        let data = plotAssetDropDown.map(function (item: any) {
            return { value: item.assetId, label: item.assetName };
        });
        setAssetData(data);
    }, [plotAssetDropDown]);

    useEffect(() => {
        let data = plotModelDropDown.map(function (item: any) {
            return { value: item.assetSapId, label: item.sensorGroupName };
        });
        setModelData(data);
    }, [plotModelDropDown]);

    useEffect(() => {
        let data = plotSensorDropDown.map(function (item: any) {
            return { value: item.sensorID, label: item.sensorName };
        });
        setSensorData(data);
    }, [plotSensorDropDown]);


    useEffect(() => {
        if (selectedAsset !== "")
            dispatch(getPlotDeviationData(`"${assetData}/18/${measureFromDate}/${measureToDate}"`)); //{assetId}/{userId}/{fromDate}/{toDate}
    }, [measureToDate, selectedAsset]);

    // console.log("Model Dropdown Data", plotModelDropDown);
    // console.log("Asset Dropdown Data", plotAssetDropDown);
    // console.log("Sensor Dropdown Data", plotSensorDropDown);
    console.log("Deviation Data", plotDeviationData);
    // console.log("Status graph data", plotStatusData);
    console.log("measure From Date", moment(measureFromDate).format('d-M-yyyy'));
    console.log("measure To Date", moment(measureToDate).format('d-M-yyyy'));

    const handlePlotAssetIdDropDown = (e: any) => {
        // console.log(e.value)
        // setSelectedAssetId(e)
        setSelectedAsset(e.value)
        // dispatch(getAssetCardPmtByAssetId(e.value)); //selectedAssetId.value
    };

    const handlePlotModeldDropDown = (e: any) => {
        // console.log(e.value)
        // setSelectedAssetId(e)
        setSelectedSensor([])
        dispatch(getPlotSensorDropDown("18/18")); //{sensorGroupId}/{userId}
    };

    const handlePlotSensorDropDown = (e: any) => {
        console.log(e)
        setSelectedSensor(e)
        // setSelectedAssetId(e)
        // dispatch(getAssetCardPmtByAssetId(e.value)); //selectedAssetId.value
    };


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
                                <Dropdown
                                    options={assetData}
                                    // defaultValue={selectedRegion}
                                    handleChange={handlePlotAssetIdDropDown}
                                />
                                <Dropdown
                                    options={modelData}
                                    // defaultValue={selectedRegion}
                                    handleChange={handlePlotModeldDropDown}

                                />
                                <Dropdown
                                    options={sensorData}
                                    // defaultValue={selectedRegion}
                                    value={selectedSensor}
                                    handleChange={handlePlotSensorDropDown}
                                    multi={true}
                                />
                                {/* <select><option>Asset ID</option></select>
                                <select><option>Model</option></select>
                                <select><option>Sensor</option></select> */}
                            </div>
                        </div>
                        <div className="asset-name">K-1701</div>
                        <SensorChart />
                    </div>
                </div>
                <SensorNames data={selectedSensor} />
            </div>
            <div id="sensor">
                <DeviationChart plotData={plotDeviationData} />
                <DeviationNames />
            </div>
        </div>

    );
};

export default Plot;