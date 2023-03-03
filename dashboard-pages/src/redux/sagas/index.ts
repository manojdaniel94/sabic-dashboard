import { fork } from '@redux-saga/core/effects'
import CommonSaga from './CommonSaga'

export default function* rootSaga() {
    yield fork(CommonSaga)
}