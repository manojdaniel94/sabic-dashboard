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
        // Asset Model Start
        assetlistOfAssetModelByplantid: [],
        loadingassetlistOfAssetModelByplantid: false,
        AnomalyModelbyAssetId: [],
        loadinggetAnomalyModelbyAssetId: false,
        FailurepreDictionByAssetId: [],
        loadingFailurepreDictionByAssetId: false,
        GraphicalImageByAssetId: [],
        loadingGraphicalImageByAssetId: false,
        AssetKPIForAssetModel: [],
        loadingAssetKPIForAssetModel: false,
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
        // Dates
        measureFromDate: "",
        measureToDate: "",
        sensorFromDate: "",
        sensorToDate: "",
        commonFromDate: "",
        commonToDate: ""
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
        // Asset Model Start
        getassetlistOfAssetModelByplantid: (state, action) => {
            state.loadingassetlistOfAssetModelByplantid = true
        },
        getassetlistOfAssetModelByplantidSuccess: (state, action) => {
            state.assetlistOfAssetModelByplantid = action.payload
            state.loadingassetlistOfAssetModelByplantid = false
        },
        getassetlistOfAssetModelByplantidFailure: (state, action) => {
            state.message = action.payload
            state.loadingassetlistOfAssetModelByplantid = false
        },
        getAnomalyModelbyAssetId: (state, action) => {
            state.loadinggetAnomalyModelbyAssetId = true
        },
        getAnomalyModelbyAssetIdSuccess: (state, action) => {
            state.AnomalyModelbyAssetId = action.payload
            state.loadinggetAnomalyModelbyAssetId = false
        },
        getAnomalyModelbyAssetIdFailure: (state, action) => {
            state.message = action.payload
            state.loadinggetAnomalyModelbyAssetId = false
        },
        getFailurepreDictionByAssetId: (state, action) => {
            state.loadingFailurepreDictionByAssetId = true
        },
        getFailurepreDictionByAssetIdSuccess: (state, action) => {
            state.FailurepreDictionByAssetId = action.payload
            state.loadingFailurepreDictionByAssetId = false
        },
        getFailurepreDictionByAssetIdFailure: (state, action) => {
            state.message = action.payload
            state.loadingFailurepreDictionByAssetId = false
        },
        getGraphicalImageByAssetId: (state, action) => {
            state.loadingGraphicalImageByAssetId = true
        },
        getGraphicalImageByAssetIdSuccess: (state, action) => {
            state.GraphicalImageByAssetId = action.payload
            state.loadingGraphicalImageByAssetId = false
        },
        getGraphicalImageByAssetIdFailure: (state, action) => {
            state.message = action.payload
            state.loadingGraphicalImageByAssetId = false
        },
        getAssetKPI: (state, action) => {
            state.loadingAssetKPIForAssetModel = true
        },
        getAssetKPISuccess: (state, action) => {
            state.AssetKPIForAssetModel = action.payload
            state.loadingAssetKPIForAssetModel = false
        },
        getAssetKPIFailure: (state, action) => {
            state.message = action.payload
            state.loadingAssetKPIForAssetModel = false
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
        // Date
        getMeasureFromDate: (state, action) => {
            state.measureFromDate = action.payload
        },
        getMeasureToDate: (state, action) => {
            state.measureToDate = action.payload
        },
        getSensorFromDate: (state, action) => {
            state.sensorFromDate = action.payload
        },
        getSensorToDate: (state, action) => {
            state.sensorToDate = action.payload
        },
        getCommonFromDate: (state, action) => {
            state.commonFromDate = action.payload
        },
        getCommonToDate: (state, action) => {
            state.commonToDate = action.payload
        },
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
    // Asset Model Start
    getassetlistOfAssetModelByplantid,
    getassetlistOfAssetModelByplantidSuccess,
    getassetlistOfAssetModelByplantidFailure,
    getAnomalyModelbyAssetId,
    getAnomalyModelbyAssetIdSuccess,
    getAnomalyModelbyAssetIdFailure,
    getFailurepreDictionByAssetId,
    getFailurepreDictionByAssetIdSuccess,
    getFailurepreDictionByAssetIdFailure,
    getGraphicalImageByAssetId,
    getGraphicalImageByAssetIdSuccess,
    getGraphicalImageByAssetIdFailure,
    getAssetKPI,
    getAssetKPISuccess,
    getAssetKPIFailure,
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
    getPlotStatusDataFailure,
    // Plot Screen Ends
    // Dates
    getMeasureFromDate,
    getMeasureToDate,
    getSensorFromDate,
    getSensorToDate,
    getCommonFromDate,
    getCommonToDate
} = CommonSlice.actions

export default CommonSlice.reducer