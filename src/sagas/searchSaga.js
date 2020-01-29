import { put, call , takeLatest} from 'redux-saga/effects';
import { fetchImages } from '../api';
import {  setError, search } from '../actions';
import { IMAGES } from '../constants';


export function* searchSaga({ payload }) {
  try {
  
    const images = yield call(fetchImages, payload);
   
     
      yield put(search(images));
    
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchSearch() {
  yield takeLatest(IMAGES.SEARCH, searchSaga);
}