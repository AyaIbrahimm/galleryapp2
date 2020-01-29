import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import searchSaga from './searchSaga'


export default function* rootSaga() {
    yield all([imagesSaga(),searchSaga()]);
}