import React, { useRef, useEffect, useState } from "react";
import AssetCard from "table/AssetCard";
import PlantAlertList from "table/PlantAlertList";
import '../../../assets/common/PmtDashboard.scss';
import ReliablityHeatMap from "charts/ReliablityHeatMap";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "components/Dropdown";
import {
    getRegions,
    getAssetListByPlantId,
    getPlantAlertSpmt,
    getAssetCardPmtByPlantId,
    getAssetCardPmtByAssetId,
    getAssetStatusPmtByPlantId,
    getStatusAssetPmtByPlantId,
    getssetStatusListbyPlantId,
    getHeatMapToolTipbyAssetStatus,
    getTopBarToolTipbyPlantId
} from '../../../redux/reducers/CommonReducer';



const PmtDashboard = () => {

    let dispatch = useDispatch();

    const { regions, assetListByPlant, plantAlertSpmt, assetCardPmtByplantId, assetCardPmtByAssetId, assetStatusPmtByPlantId, statusAssetPmtByPlantId, setStatusListbyPlantId, heatMapToolTipbyAssetStatus, topBarToolTipbyPlantId } = useSelector((state: any) => ({
        regions: state.Common.regions,
        assetListByPlant: state.Common.assetListByPlant,
        plantAlertSpmt: state.Common.plantAlertSpmt,
        assetCardPmtByplantId: state.Common.assetCardPmtByplantId,
        assetCardPmtByAssetId: state.Common.assetCardPmtByAssetId,
        assetStatusPmtByPlantId: state.Common.assetStatusPmtByPlantId,
        statusAssetPmtByPlantId: state.Common.statusAssetPmtByPlantId,
        setStatusListbyPlantId: state.Common.setStatusListbyPlantId,
        heatMapToolTipbyAssetStatus: state.Common.heatMapToolTipbyAssetStatus,
        topBarToolTipbyPlantId: state.Common.topBarToolTipbyPlantId,
    }));

    const [assetIdDropList, setAssetIdDropList] = useState<any>();
    const [selectedAssetId, setSelectedAssetId] = useState<any>("")
    const [assetIdDropList1, setAssetIdDropList1] = useState<any>();
    const [selectedAssetId1, setSelectedAssetId1] = useState<any>("")
    const [heatStatusList, setHeatStatusList] = useState<any>();
    const [selectedHeatStatus, setSelectedHeatStatus] = useState<any>("All")
    const [heatMapData, setheatMapData] = useState({
        assetOff: "",
        warning: "",
        normal: "",
        assetUnderRisk: ""
    })
    const [getErrorMag, setErrorMag] = useState(false);

    const [mouseHover, setMouseHover] = useState({
        over: false,
        statusName: ""
    })


    useEffect(() => {
        dispatch(getRegions("1"));
        dispatch(getAssetListByPlantId("18"));    //selectedPlant.value
        dispatch(getPlantAlertSpmt("18"));        //selectedPlant.value
        dispatch(getAssetCardPmtByPlantId("18")); //selectedPlant.value
        // dispatch(getAssetCardPmtByAssetId("18")); //selectedAssetId.value
        dispatch(getAssetStatusPmtByPlantId("18")); //selectedPlant.value
        dispatch(getStatusAssetPmtByPlantId("18")); //selectedPlant.value
        dispatch(getssetStatusListbyPlantId("18")); //selectedPlant.value
        //dispatch(getHeatMapToolTipbyAssetStatus("18")); //selectedPlant.value
        dispatch(getTopBarToolTipbyPlantId("18")); //selectedPlant.value
    }, []);

    useEffect(() => {
        let data = assetListByPlant.map(function (item: any) {
            return { value: item.assetId, label: item.assetName };
        });
        setAssetIdDropList(data);

        let data1 = assetListByPlant.map(function (item: any) {
            return { value: item.assetId, label: item.assetId };
        });
        setAssetIdDropList1(data1);
    }, [assetListByPlant]);

    useEffect(() => {
        let data = setStatusListbyPlantId.map(function (item: any, index: number) {
            return { value: item.status, label: item.status };
        });
        setHeatStatusList(data);
    }, [setStatusListbyPlantId]);

    useEffect(() => {
        if (assetStatusPmtByPlantId.length > 0)
            setheatMapData({
                ...heatMapData,
                assetOff: assetStatusPmtByPlantId.find((item: any) => item.title === "Normal"),
                warning: assetStatusPmtByPlantId.find((item: any) => item.title === "Warning"),
                normal: assetStatusPmtByPlantId.find((item: any) => item.title === "Normal"),
                assetUnderRisk: assetStatusPmtByPlantId.find((item: any) => item.title === "Asset_Under_Risk"),

            })
    }, [assetStatusPmtByPlantId]);

    useEffect(() => {
        if (mouseHover.over) {
            dispatch(getHeatMapToolTipbyAssetStatus(mouseHover.statusName));
            console.log("hii")
        }
        console.log(mouseHover)
    }, [mouseHover.over, mouseHover.statusName]);


    const handleAssetIdDropChange = (e: any) => {
        // console.log(e.value)
        setSelectedAssetId(e)
        setSelectedAssetId1({ label: e.value, value: e.value })
        dispatch(getAssetCardPmtByAssetId(e.value)); //selectedAssetId.value
        setErrorMag(false);
    };

    const handleAssetIdDropChange1 = (e: any) => {
        // console.log(e.value)
        try {
            let filtervalue = assetListByPlant.filter((item: any) => item.assetId === e.value)
            // console.log(filtervalue)
            setSelectedAssetId({ label: filtervalue[0].assetName, value: e.value })
            setSelectedAssetId1(e)
            dispatch(getAssetCardPmtByAssetId(e.value)); //selectedAssetId.value
            setErrorMag(false);
        } catch (error) {
            console.log(error)
        }

    };


    const handleHeatStatusDropChange = (e: any) => {
        //  console.log(e.value)
        setSelectedHeatStatus(e.value)
        //dispatch(getHeatMapToolTipbyAssetStatus(e.value)); //selectedPlant.value
    };

    // console.log("assetListByPlant details", assetListByPlant);
    // console.log("plantAlertSpmt details", plantAlertSpmt);
    // console.log("assetCardPmtByplantId details", assetCardPmtByplantId);
    // console.log("assetCardPmtByAssetId details", assetCardPmtByAssetId);
    // console.log("Heatchart details", assetStatusPmtByPlantId);
    // console.log("getTopStatusByPlantId", statusAssetPmtByPlantId);
    // console.log("setStatusListbyPlantId", setStatusListbyPlantId);
    // console.log("heatMapToolTipbyAssetStatus", heatMapToolTipbyAssetStatus);
    // console.log("topBarToolTipbyPlantId", topBarToolTipbyPlantId);

    let handleNavigation = (select: any) => {
        console.log("Go to Asset Page with Asset ID", select);
        if (select === "") {
            setErrorMag(true);
        }
        if (select !== "") {
            setErrorMag(false);
        }
    }

    // const getSelectedclassName = (id: any) => selectedID === id ? "error" : "";
    // const handleMouseOver = (val: any) => {
    //     dispatch(getHeatMapToolTipbyAssetStatus(val));
    // }

    return (
        <div id="pmt">
            <div id="pmt-left">
                <div id="pmt-asset-card">
                    <div className="pmt-title">ASSET CARD</div>
                    <div className="pmt-filter">
                        <div className="pmt-asset-name">{selectedAssetId === "" ? "Poly 2" : selectedAssetId.label}</div>
                        <div className="pmt-fills">
                            <div className={`pmt-time`}><span>Asset ID</span>
                                <Dropdown
                                    options={assetIdDropList1}
                                    // defaultValue={selectedRegion}
                                    value={selectedAssetId1}
                                    multi={true}
                                    handleChange={handleAssetIdDropChange1}
                                />
                            </div>
                            <div className="pmt-options">
                                <Dropdown
                                    options={assetIdDropList}
                                    // defaultValue={selectedRegion}
                                    value={selectedAssetId}
                                    handleChange={handleAssetIdDropChange}
                                /></div>
                            <div className="pmt-gobtn" onClick={() => handleNavigation(selectedAssetId)} >Go</div>
                        </div>
                        <div className="pmt-error">{getErrorMag === true ? <span className="PmtErrorMsg">Need to select AssetID</span> : ""}</div>
                    </div>

                    {/* <div className="pmt-asset-name">LC-01 - CGC</div> */}
                    <AssetCard
                        data={selectedAssetId === "" ?
                            assetCardPmtByplantId : assetCardPmtByAssetId} />
                </div>
                <PlantAlertList
                    data={plantAlertSpmt} />
            </div>
            <div id="pmt-right">
                <>
                    <div className="pmt-right-title">RELIABILITY HEAT MAP</div>
                    <div className="pmt-right-name">Click on the map to get more details</div>
                    <div className="pmt-right-dropdown"><Dropdown
                        options={heatStatusList}
                        // defaultValue={selectedHeatStatus}
                        defaultValue={{ label: "All", value: "All" }}
                        handleChange={handleHeatStatusDropChange}
                    // value={selectedHeatStatus}
                    /></div>
                    <ReliablityHeatMap
                        statusData={heatMapData}
                        toolTipData={heatMapToolTipbyAssetStatus}
                        selectedHeatStatus={selectedHeatStatus}
                        setMouseHover={setMouseHover}
                        mouseHover={mouseHover}

                    />
                </>
            </div>
        </div>
    );
};
export default PmtDashboard;
