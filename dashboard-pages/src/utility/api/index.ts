//apply base url for axios
// const REACT_APP_APP_URL = process.env.REACT_APP_APP_URL;

export const BASE_URL = "https://jsonplaceholder.typicode.com";
//export const GET_POST_DETAILS = "/posts";

export const Api = {
    getPost: BASE_URL + '/posts',
    getPostDetail: BASE_URL + '/posts',
    getAllRegions: BASE_URL + 'Affiliate/getregions_byuserid/',
    getAllAffiliateByRegion: BASE_URL + 'Affiliate/getaffiliates_byregionid/',
    getHomeStatusByuid: BASE_URL + 'Global/getglobalstatus_byuserid/',
    getApiAssetListByPlantId: BASE_URL + 'PlantPmt/getassetlist_byplantid/',
    getApiPlantAlertsPmt: BASE_URL + 'PlantPmt/getplant_alertspmt/',
    getApiAssetcardpmtByplantid: BASE_URL + 'PlantPmt/getassetcardpmt_byplantid/',
    getApiAssetstatuspmtByplantid: BASE_URL + 'PlantPmt/getassetstatuspmt_byplantid/',
    getApiTopbarsummaryAssetpmtByplantid: BASE_URL + 'PlantPmt/gettopbarsummary_assetpmt_byplantid/',
    getApiassetcardpmtByassetid: BASE_URL + 'PlantPmt/gettopbarsummary_assetpmt_byplantid/',
    getdeviationplotgraph_byassetid: BASE_URL + 'DeviationPlot/getdeviationplotgraph_byassetid/',
    getApiAssetStatusListbyPlantId: BASE_URL + 'PlantPmt/GetAssetStatusListbyPlantId/',
    getApiHeatMapToolTipbyAssetStatus: BASE_URL + 'PlantPmt/GetHeatMapToolTipbyAssetStatus//',
    getApiTopBarToolTipbyPlantId: BASE_URL + 'PlantPmt/GetTopBarToolTipbyPlantId/',
     // Asset Model Start
    getApiAssetlistOfAssetModelByplantid: BASE_URL + 'PlantPmt/getassetcardpmt_byplantid/',
    getApiAnomalyModelbyAssetId: BASE_URL + 'PlantPmt/getassetcardpmt_byplantid/',
    getApiFailurepreDictionByAssetId: BASE_URL + 'PlantPmt/getassetcardpmt_byplantid/',
    getApiGraphicalImageByAssetId: BASE_URL + 'PlantPmt/getassetcardpmt_byplantid/',
    // Asset Model End
    // plot Screen Start
    getplotsmodel_byassetid: BASE_URL + 'api/DeviationPlotController/getplotsmodel_byassetid/',//Model Dropdown
    getplotsassetlist_byplantid: BASE_URL + 'api/DeviationPlotController/getplotsassetlist_byplantid/',//Asset Dropdown
    getplotssensorlist_bysensorgroupId: BASE_URL + 'api/DeviationPlotController/getplotssensorlist_bysensorgroupId/', //Sensor Dropdown
    getplotsdeviationgraph_byassetid: BASE_URL + 'api/DeviationPlotController/getplotsdeviationgraph_byassetid/', //deviation chart
    getplotsstatusgraph_byassetid: BASE_URL + 'api/DeviationPlotController/getplotsstatusgraph_byassetid/',//sensor chart
    // Plot screen Ends


}

