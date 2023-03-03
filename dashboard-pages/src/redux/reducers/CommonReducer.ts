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
        statusAssetPmtByPlantId:[],
        loadingStatusAssetPmtByPlantId: false,
        setStatusListbyPlantId:[],
        loadingSetStatusListbyPlantId: false,
        heatMapToolTipbyAssetStatus:[],
        loadingHeatMapToolTipbyAssetStatus: false,
        topBarToolTipbyPlantId:[],
        loadingTopBarToolTipbyPlantId: false,
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
} = CommonSlice.actions

export default CommonSlice.reducer