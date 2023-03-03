// @ts-nocheck
import { put, takeEvery, debounce, select } from '@redux-saga/core/effects';
import { getRequest, postRequest } from '../../utility/request';
import { Api } from '../../utility/api';
import { HTTP_CALL } from '../../constant/constants';
import { getassetlistByplantid, getplantAlertspmt, getassetcardpmtByplantid, getassetcardpmtByassetid, gettopbarsummaryAssetpmtByplantid, getassetstatuspmtByplantid, getJsonAssetStatusListbyPlantId, getJsonHeatMapToolTipbyAssetStatus, getJsonTopBarToolTipbyPlantId } from '../../DataModel/PMT/PmtList';



function* getregions(action: any) {
    // if (HTTP_CALL) {
    //     try {
    //         const response = yield getRequest(`${Api.getAllRegions}${action.payload}`);
    //         console.log('GET POST RESPONSE DATA', response);
    //         if (response.status == 200) {
    //             // console.log('GET POST RESPONSE DATA', response.data);
    //             yield put({
    //                 type: "Common/getRegionSuccess",
    //                 payload: response.data

    //             });
    //         } else {
    //             yield put({
    //                 type: "Common/getRegionsFailure",
    //                 payload: "not 200",
    //             });
    //         }
    //     } catch (error) {
    //         yield put({
    //             type: "Common/getRegionsFailure",
    //             payload: error,
    //         });
    //     }
    // }
    // else {
    //     yield put({
    //         type: "Common/getRegionSuccess",
    //         payload: region

    //     });
    // }
    yield put({
        type: "Common/getRegionSuccess",
        payload: ["manoj"]

    });

}

function* getAssetListByPlantId(action: any) {
    if (HTTP_CALL) {
        try {
            const response = yield getRequest(`${Api.getApiAssetListByPlantId}${action.payload}`);
            if (response.status == 200) {
                console.log('GET POST RESPONSE DATA', response.data);
                yield put({
                    type: "Common/getAssetListByPlantIdSuccess",
                    payload: response.data

                });
            } else {
                yield put({
                    type: "Common/getAssetListByPlantIdFailure",
                    payload: "not 200",
                });
            }
        } catch (error) {
            yield put({
                type: "Common/getAssetListByPlantIdFailure",
                payload: error,
            });
        }
    }
    else {
        yield put({
            type: "Common/getAssetListByPlantIdSuccess",
            payload: getassetlistByplantid

        });
    }

}
function* getPlantAlertSpmt(action: any) {
    if (HTTP_CALL) {
        try {
            const response = yield getRequest(`${Api.getApiPlantAlertsPmt}${action.payload}`);
            if (response.status == 200) {
                console.log('GET POST RESPONSE DATA', response.data);
                yield put({
                    type: "Common/getPlantAlertSpmtSuccess",
                    payload: response.data

                });
            } else {
                yield put({
                    type: "Common/getPlantAlertSpmtFailure",
                    payload: "not 200",
                });
            }
        } catch (error) {
            yield put({
                type: "Common/getPlantAlertSpmtFailure",
                payload: error,
            });
        }
    }
    else {
        yield put({
            type: "Common/getPlantAlertSpmtSuccess",
            payload: getplantAlertspmt

        });
    }

}
function* getAssetCardPmtByPlantId(action: any) {
    if (HTTP_CALL) {
        try {
            const response = yield getRequest(`${Api.getApiAssetcardpmtByplantid}${action.payload}`);
            if (response.status == 200) {
                console.log('GET POST RESPONSE DATA', response.data);
                yield put({
                    type: "Common/getAssetCardPmtByPlantIdSuccess",
                    payload: response.data

                });
            } else {
                yield put({
                    type: "Common/getAssetCardPmtByPlantIdFailure",
                    payload: "not 200",
                });
            }
        } catch (error) {
            yield put({
                type: "Common/getAssetCardPmtByPlantIdFailure",
                payload: error,
            });
        }
    }
    else {
        yield put({
            type: "Common/getAssetCardPmtByPlantIdSuccess",
            payload: getassetcardpmtByplantid

        });
    }

}
function* getAssetCardPmtByAssetId(action: any) {
    if (HTTP_CALL) {
        try {
            const response = yield getRequest(`${Api.getApiassetcardpmtByassetid}${action.payload}`);
            if (response.status == 200) {
                console.log('GET POST RESPONSE DATA', response.data);
                yield put({
                    type: "Common/getAssetCardPmtByAssetIdSuccess",
                    payload: response.data

                });
            } else {
                yield put({
                    type: "Common/getAssetCardPmtByAssetIdFailure",
                    payload: "not 200",
                });
            }
        } catch (error) {
            yield put({
                type: "Common/getAssetCardPmtByAssetIdFailure",
                payload: error,
            });
        }
    }
    else {
        yield put({
            type: "Common/getAssetCardPmtByAssetIdSuccess",
            payload: getassetcardpmtByassetid

        });
    }

}
function* getAssetStatusPmtByPlantId(action: any) {
    if (HTTP_CALL) {
        try {
            const response = yield getRequest(`${Api.getApiAssetcardpmtByplantid}${action.payload}`);
            if (response.status == 200) {
                console.log('GET POST RESPONSE DATA', response.data);
                yield put({
                    type: "Common/getAssetStatusPmtByPlantIdSuccess",
                    payload: response.data

                });
            } else {
                yield put({
                    type: "Common/getAssetStatusPmtByPlantIdFailure",
                    payload: "not 200",
                });
            }
        } catch (error) {
            yield put({
                type: "Common/getAssetStatusPmtByPlantIdFailure",
                payload: error,
            });
        }
    }
    else {
        yield put({
            type: "Common/getAssetStatusPmtByPlantIdSuccess",
            payload: getassetstatuspmtByplantid

        });
    }

}

function* getStatusAssetPmtByPlantId(action: any) {
    if (HTTP_CALL) {
        try {
            const response = yield getRequest(`${Api.getApiAssetstatuspmtByplantid}${action.payload}`);
            if (response.status == 200) {
                console.log('GET POST RESPONSE DATA', response.data);
                yield put({
                    type: "Common/getStatusAssetPmtByPlantIdSuccess",
                    payload: response.data

                });
            } else {
                yield put({
                    type: "Common/getStatusAssetPmtByPlantIdFailure",
                    payload: "not 200",
                });
            }
        } catch (error) {
            yield put({
                type: "Common/getStatusAssetPmtByPlantIdFailure",
                payload: error,
            });
        }
    }
    else {
        yield put({
            type: "Common/getStatusAssetPmtByPlantIdSuccess",
            payload: gettopbarsummaryAssetpmtByplantid

        });
    }

}
function* getssetStatusListbyPlantId(action: any) {
    if (HTTP_CALL) {
        try {
            const response = yield getRequest(`${Api.getApiAssetstatuspmtByplantid}${action.payload}`);
            if (response.status == 200) {
                console.log('GET POST RESPONSE DATA', response.data);
                yield put({
                    type: "Common/getssetStatusListbyPlantIdSuccess",
                    payload: response.data

                });
            } else {
                yield put({
                    type: "Common/getssetStatusListbyPlantIdFailure",
                    payload: "not 200",
                });
            }
        } catch (error) {
            yield put({
                type: "Common/getssetStatusListbyPlantIdFailure",
                payload: error,
            });
        }
    }
    else {
        yield put({
            type: "Common/getssetStatusListbyPlantIdSuccess",
            payload: getJsonAssetStatusListbyPlantId

        });
    }

}
function* getHeatMapToolTipbyAssetStatus(action: any) {
    if (HTTP_CALL) {
        try {
            const response = yield getRequest(`${Api.getApiAssetstatuspmtByplantid}${action.payload}`);
            if (response.status == 200) {
                console.log('GET POST RESPONSE DATA', response.data);
                yield put({
                    type: "Common/getHeatMapToolTipbyAssetStatusSuccess",
                    payload: response.data

                });
            } else {
                yield put({
                    type: "Common/getHeatMapToolTipbyAssetStatusFailure",
                    payload: "not 200",
                });
            }
        } catch (error) {
            yield put({
                type: "Common/getHeatMapToolTipbyAssetStatusFailure",
                payload: error,
            });
        }
    }
    else {
        yield put({
            type: "Common/getHeatMapToolTipbyAssetStatusSuccess",
            payload: getJsonHeatMapToolTipbyAssetStatus

        });
    }

}
function* getTopBarToolTipbyPlantId(action: any) {
    if (HTTP_CALL) {
        try {
            const response = yield getRequest(`${Api.getApiAssetstatuspmtByplantid}${action.payload}`);
            if (response.status == 200) {
                console.log('GET POST RESPONSE DATA', response.data);
                yield put({
                    type: "Common/getTopBarToolTipbyPlantIdSuccess",
                    payload: response.data

                });
            } else {
                yield put({
                    type: "Common/getTopBarToolTipbyPlantIdFailure",
                    payload: "not 200",
                });
            }
        } catch (error) {
            yield put({
                type: "Common/getTopBarToolTipbyPlantIdFailure",
                payload: error,
            });
        }
    }
    else {
        yield put({
            type: "Common/getTopBarToolTipbyPlantIdSuccess",
            payload: getJsonTopBarToolTipbyPlantId

        });
    }

}



export default function* mySaga() {
    yield takeEvery('Common/getRegions', getregions);
    yield takeEvery('Common/getAssetListByPlantId', getAssetListByPlantId);
    yield takeEvery('Common/getPlantAlertSpmt', getPlantAlertSpmt);
    yield takeEvery('Common/getAssetCardPmtByPlantId', getAssetCardPmtByPlantId);
    yield takeEvery('Common/getAssetCardPmtByAssetId', getAssetCardPmtByAssetId);
    yield takeEvery('Common/getAssetStatusPmtByPlantId', getAssetStatusPmtByPlantId);
    yield takeEvery('Common/getStatusAssetPmtByPlantId', getStatusAssetPmtByPlantId);
    yield takeEvery('Common/getssetStatusListbyPlantId', getssetStatusListbyPlantId);
    yield takeEvery('Common/getHeatMapToolTipbyAssetStatus', getHeatMapToolTipbyAssetStatus);
    yield takeEvery('Common/getTopBarToolTipbyPlantId', getTopBarToolTipbyPlantId);
}