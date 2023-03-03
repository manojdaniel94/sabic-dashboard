import { call, put, takeEvery } from 'redux-saga/effects'
const apiURL = "https://jsonplaceholder.typicode.com/users";
export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string,
    message?: string,
    users?: any[],
}

function getApi(): any {
    return fetch(apiURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).catch(error => { throw error });
}

function* fetchUsers(action: any) {
    try {
        const users: ResponseGenerator = yield call(getApi);
        console.log("GET_UERS_SUCESS=====")
        yield put({ type: 'GET_UERS_SUCESS', users: users });
    } catch (e: any) {
        yield put({ type: 'GET_UERS_FAILED', message: e.message });
    }
}
export function* userSaga() {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}