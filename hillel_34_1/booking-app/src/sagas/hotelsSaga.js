import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
} from '../store/hotels/hotelsSlice';
import { fetchHotels } from '../services/api';

function* handleFetchHotels() {
  try {
    const response = yield call(fetchHotels);
    yield put(fetchHotelsSuccess(response.data));
  } catch (error) {
    yield put(fetchHotelsFailure(error.message));
  }
}

export function* hotelsWatcher() {
  yield takeLatest(fetchHotelsRequest.type, handleFetchHotels);
}