import React, { useRef, useEffect, useState } from "react";
import "./Assets.scss"
// import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import AlertList from "./AssetsPage/AlertList/AlertList";
import AssetModel from "./AssetsPage/AssetModel/AssetModel";
import AssetTimeLine from "./AssetsPage/AssetTimeLine/AssetTimeLine";
import SpareParts from "./AssetsPage/SpareParts/SpareParts";
import LiveTracking from "./AssetsPage/LiveTracking/LiveTracking";
import ReferenceTable from "./AssetsPage/ReferenceTable/ReferenceTable";
import Plot from "./AssetsPage/Plot/Plot";
// import { useDispatch, useSelector } from "react-redux";

interface Props {
    buttonName: string;
    onClickHandler: any;

}

const Assets = () => {

    const DATA = [
        { id: "AssetModel", value: "ASSET MODEL" },
        { id: "LiveTracking", value: "LIVE TRACKING" },
        { id: "AssetTimeLine", value: "ASSET TIMELINE" },
        { id: "AlertList", value: "ALERT LIST" },
        { id: "Plot", value: "PLOT" },
        { id: "ReferenceTable", value: "REFERENCE TABLE" },
        { id: "SpareParts", value: "SPARE PARTS" },
       
    ];

    const [elements, setElements] = useState(DATA);
    const [selectedID, setSelectedID] = useState("AssetModel"); // you could set a default id as well

    const handleClick = (id: any) => setSelectedID(id);


    const getSelectedclassName = (id: any) => selectedID === id ? "active" : "notselected";

    const TopContainer = () => {
        return (
            <div id="asset-menu">
                {elements.map((el) => (
                    <a
                        key={el.id}
                        id={el.id}
                        className={`top-container-conten ${getSelectedclassName(el.id)}`}
                        onClick={() => handleClick(el.id)}
                    >
                        {el.value}
                    </a>
                ))}
            </div>
        );
    }


    const renderStep = () => {
        switch (selectedID) {
            case "AssetModel":
                return (
                    <AssetModel
                    />
                )
            case "AlertList":
                return (
                    <AlertList
                    />
                )
            case "Plot":
                return (
                    <Plot
                    />
                )
            case "LiveTracking":
                return (
                    <LiveTracking
                    />
                )
            case "AssetTimeLine":
                return (
                    <AssetTimeLine
                    />
                )
            case "SpareParts":
                return (
                    <SpareParts
                    />
                )
            case "ReferenceTable":
                return (
                    <ReferenceTable
                    />
                )

            default:
                return <div>{"INFO_NO_STEP_AVAILABLE"}</div>
        }
    }




    return (
        <div>
            {/* <BreadCrumb /> */}
            <div id="content-affiliates" style={{ top: "0px" }}>
                <TopContainer />
                {renderStep()}
            </div>
        </div>

    );
};

export default Assets;