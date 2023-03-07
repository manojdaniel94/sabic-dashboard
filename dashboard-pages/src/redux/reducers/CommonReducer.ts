import { createSlice } from '@reduxjs/toolkit'
import { HOME, HOME_ROUTE, initialSelectedData } from '../../constant/constants'

const CommonSlice = createSlice({
    name: "Common",
    initialState: {
        message: "",
        regions: [],
        loadingRegions: false,
        assetListByPlant: [],
        loadingGetAssetListByPlantId: false,
        plantAlertSpmt: [],
        loadingplantAlertSpmt: false,
        assetCardPmtByplantId: [],
        loadingAssetCardPmtByplantId: false,
        assetCardPmtByAssetId: [],
        loadingAssetCardPmtByAssetId: false,
        assetStatusPmtByPlantId: [],
        loadingAssetStatusPmtByPlantId: false,
        statusAssetPmtByPlantId: [],
        loadingStatusAssetPmtByPlantId: false,
        setStatusListbyPlantId: [],
        loadingSetStatusListbyPlantId: false,
        heatMapToolTipbyAssetStatus: [],
        loadingHeatMapToolTipbyAssetStatus: false,
        topBarToolTipbyPlantId: [],
        loadingTopBarToolTipbyPlantId: false,
        //PlotScreen
        plotModelDropDown: [],
        loadingPlotModelDropDown: false,
        plotAssetDropDown: [],
        loadingPlotAssetDropDown: false,
        plotSensorDropDown: [],
        loadingPlotSensorDropDown: false,
        plotDeviationData: [],
        loadingPlotDeviationData: false,
        plotStatusData: [],
        loadingPlotStatusData: false,
        //PlotScreen End
    },
    reducers: {
        getRegions: (state, action) => {
            state.loadingRegions = true
        },
        getRegionSuccess: (state, action) => {
            state.regions = action.payload
            state.loadingRegions = false
        },
        getRegionsFailure: (state, action) => {
            state.loadingRegions = false
        },
        getAssetListByPlantId: (state, action) => {
            state.loadingGetAssetListByPlantId = true
        },
        getAssetListByPlantIdSuccess: (state, action) => {
            state.assetListByPlant = action.payload
            state.loadingGetAssetListByPlantId = false
        },
        getAssetListByPlantIdFailure: (state, action) => {
            state.loadingGetAssetListByPlantId = false
        },
        getPlantAlertSpmt: (state, action) => {
            state.loadingplantAlertSpmt = true
        },
        getPlantAlertSpmtSuccess: (state, action) => {
            state.plantAlertSpmt = action.payload
            state.loadingplantAlertSpmt = false
        },
        getPlantAlertSpmtFailure: (state, action) => {
            state.message = action.payload
            state.loadingplantAlertSpmt = false
        },
        getAssetCardPmtByPlantId: (state, action) => {
            state.loadingAssetCardPmtByplantId = true
        },
        getAssetCardPmtByPlantIdSuccess: (state, action) => {
            state.assetCardPmtByplantId = action.payload
            state.loadingAssetCardPmtByplantId = false
        },
        getAssetCardPmtByPlantIdFailure: (state, action) => {
            state.message = action.payload
            state.loadingAssetCardPmtByplantId = false
        },
        getAssetCardPmtByAssetId: (state, action) => {
            state.loadingAssetCardPmtByAssetId = true
        },
        getAssetCardPmtByAssetIdSuccess: (state, action) => {
            state.assetCardPmtByAssetId = action.payload
            state.loadingAssetCardPmtByAssetId = false
        },
        getAssetCardPmtByAssetIdFailure: (state, action) => {
            state.message = action.payload
            state.loadingAssetCardPmtByAssetId = false
        },
        getAssetStatusPmtByPlantId: (state, action) => {
            state.loadingAssetStatusPmtByPlantId = true
        },
        getAssetStatusPmtByPlantIdSuccess: (state, action) => {
            state.assetStatusPmtByPlantId = action.payload
            state.loadingAssetStatusPmtByPlantId = false
        },
        getAssetStatusPmtByPlantIdFailure: (state, action) => {
            state.message = action.payload
            state.loadingAssetStatusPmtByPlantId = false
        },
        getStatusAssetPmtByPlantId: (state, action) => {
            state.loadingStatusAssetPmtByPlantId = true
        },
        getStatusAssetPmtByPlantIdSuccess: (state, action) => {
            state.statusAssetPmtByPlantId = action.payload
            state.loadingStatusAssetPmtByPlantId = false
        },
        getStatusAssetPmtByPlantIdFailure: (state, action) => {
            state.message = action.payload
            state.loadingStatusAssetPmtByPlantId = false
        },
        getssetStatusListbyPlantId: (state, action) => {
            state.loadingSetStatusListbyPlantId = true
        },
        getssetStatusListbyPlantIdSuccess: (state, action) => {
            state.setStatusListbyPlantId = action.payload
            state.loadingSetStatusListbyPlantId = false
        },
        getssetStatusListbyPlantIdFailure: (state, action) => {
            state.message = action.payload
            state.loadingSetStatusListbyPlantId = false
        },
        getHeatMapToolTipbyAssetStatus: (state, action) => {
            state.loadingHeatMapToolTipbyAssetStatus = true
        },
        getHeatMapToolTipbyAssetStatusSuccess: (state, action) => {
            state.heatMapToolTipbyAssetStatus = action.payload
            state.loadingHeatMapToolTipbyAssetStatus = false
        },
        getHeatMapToolTipbyAssetStatusFailure: (state, action) => {
            state.message = action.payload
            state.loadingHeatMapToolTipbyAssetStatus = false
        },
        getTopBarToolTipbyPlantId: (state, action) => {
            state.loadingTopBarToolTipbyPlantId = true
        },
        getTopBarToolTipbyPlantIdSuccess: (state, action) => {
            state.topBarToolTipbyPlantId = action.payload
            state.loadingTopBarToolTipbyPlantId = false
        },
        getTopBarToolTipbyPlantIdFailure: (state, action) => {
            state.message = action.payload
            state.loadingTopBarToolTipbyPlantId = false
        },
        // Plot Screen
        getPlotModelDropDown: (state, action) => {
            state.loadingPlotModelDropDown = true
        },
        getPlotModelDropDownSuccess: (state, action) => {
            state.plotModelDropDown = action.payload
            state.loadingPlotModelDropDown = false
        },
        getPlotModelDropDownFailure: (state, action) => {
            state.loadingPlotModelDropDown = false
        },
        getPlotAssetDropDown: (state, action) => {
            state.loadingPlotAssetDropDown = true
        },
        getPlotAssetDropDownSuccess: (state, action) => {
            state.plotAssetDropDown = action.payload
            state.loadingPlotAssetDropDown = false
        },
        getPlotAssetDropDownFailure: (state, action) => {
            state.loadingPlotAssetDropDown = false
        },
        getPlotSensorDropDown: (state, action) => {
            state.loadingPlotSensorDropDown = true
        },
        getPlotSensorDropDownSuccess: (state, action) => {
            state.plotSensorDropDown = action.payload
            state.loadingPlotSensorDropDown = false
        },
        getPlotSensorDropDownFailure: (state, action) => {
            state.loadingPlotSensorDropDown = false
        },
        getPlotDeviationData: (state, action) => {
            state.loadingPlotDeviationData = true
        },
        getPlotDeviationDataSuccess: (state, action) => {
            state.plotDeviationData = action.payload
            state.loadingPlotDeviationData = false
        },
        getPlotDeviationDataFailure: (state, action) => {
            state.loadingPlotDeviationData = false
        },
        getPlotStatusData: (state, action) => {
            state.loadingPlotStatusData = true
        },
        getPlotStatusDataSuccess: (state, action) => {
            state.plotStatusData = action.payload
            state.loadingPlotStatusData = false
        },
        getPlotStatusDataFailure: (state, action) => {
            state.loadingPlotStatusData = false
        },
        // Plot Screen Ends
    }
})

export const {
    getRegions,
    getRegionSuccess,
    getRegionsFailure,
    getAssetListByPlantId,
    getAssetListByPlantIdSuccess,
    getAssetListByPlantIdFailure,
    getPlantAlertSpmt,
    getPlantAlertSpmtSuccess,
    getPlantAlertSpmtFailure,
    getAssetCardPmtByPlantId,
    getAssetCardPmtByPlantIdSuccess,
    getAssetCardPmtByPlantIdFailure,
    getAssetCardPmtByAssetId,
    getAssetCardPmtByAssetIdSuccess,
    getAssetCardPmtByAssetIdFailure,
    getAssetStatusPmtByPlantId,
    getAssetStatusPmtByPlantIdSuccess,
    getAssetStatusPmtByPlantIdFailure,
    getStatusAssetPmtByPlantId,
    getStatusAssetPmtByPlantIdSuccess,
    getStatusAssetPmtByPlantIdFailure,
    getssetStatusListbyPlantId,
    getssetStatusListbyPlantIdSuccess,
    getssetStatusListbyPlantIdFailure,
    getHeatMapToolTipbyAssetStatus,
    getHeatMapToolTipbyAssetStatusSuccess,
    getHeatMapToolTipbyAssetStatusFailure,
    getTopBarToolTipbyPlantId,
    getTopBarToolTipbyPlantIdSuccess,
    getTopBarToolTipbyPlantIdFailure,
    // Plot Screen
    getPlotModelDropDown,
    getPlotModelDropDownSuccess,
    getPlotModelDropDownFailure,
    getPlotAssetDropDown,
    getPlotAssetDropDownSuccess,
    getPlotAssetDropDownFailure,
    getPlotSensorDropDown,
    getPlotSensorDropDownSuccess,
    getPlotSensorDropDownFailure,
    getPlotDeviationData,
    getPlotDeviationDataSuccess,
    getPlotStatusData,
    getPlotStatusDataSuccess,
    getPlotStatusDataFailure
    // Plot Screen Ends

} = CommonSlice.actions

export default CommonSlice.reducer