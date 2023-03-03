import React, { useRef, useState, useEffect } from "react";
import "./Plant.scss"
import MenuContainer from "components/MenuContainer";
import PmtDashboard from "./PlantPage/PmtDashboard";
import AlertSatistics from "./PlantPage/AlertSatistics";
import Status from "components/Status";
import { useDispatch, useSelector } from "react-redux";
// import { getStatusAssetPmtByPlantId, getTopBarToolTipbyPlantId } from "../redux/reducers/CommonReducer";


const PLANT_MENU_DATA = [
    { id: 1, value: "PMT" },
    { id: 2, value: "ALERT SATISTICS" },
    { id: 3, value: "MODEL PERFORMNACE" },
    { id: 4, value: "ALERT MANAGEMENT PAGE" },
];
const Plant = () => {

    let dispatch = useDispatch();

    const { statusAssetPmtByPlantId,topBarToolTipbyPlantId} = useSelector((state: any) => ({
        statusAssetPmtByPlantId: state.Common.statusAssetPmtByPlantId,
        topBarToolTipbyPlantId: state.Common.topBarToolTipbyPlantId,
    }));

    // useEffect(() => {
    //     dispatch(getStatusAssetPmtByPlantId("18")); //selectedPlant.value
    //     dispatch(getTopBarToolTipbyPlantId("18/1")); //{plantId}/{userid}
    // }, []);

    // const [elements, setElements] = useState(PLANT_MENU_DATA);
    const [selectedID, setSelectedID] = useState(1);

    const handleMenuClick = (id: any) => {
        setSelectedID(id);
        console.log(id)
    }

    const getSelectedclassName = (id: any) => selectedID === id ? "active" : "notselected";


    const renderStep = () => {
        switch (selectedID) {
            case 1:
                return (
                    <PmtDashboard
                    />
                )
            case 2:
                return (
                    <AlertSatistics
                    />
                )

            default:
                return <div>{"INFO_NO_STEP_AVAILABLE"}</div>
        }
    }

    return (

        <>
            <Status 
                data={statusAssetPmtByPlantId} 
                page={"PLANT"}
                healthIndex={topBarToolTipbyPlantId} 
            />
            <MenuContainer
                data={PLANT_MENU_DATA}
                handleMenuClick={handleMenuClick}
                getSelectedclassName={getSelectedclassName}
            />
            {renderStep()}
        </>


    );
};



export default Plant;