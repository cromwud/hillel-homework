import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'redux-first-history';
import {
  fetchDestinationsRequest,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
  submitBookingRequest,
  submitBookingSuccess,
  submitBookingFailure,
} from '../store/booking/bookingSlice';
import { fetchHotelsRequest } from '../store/hotels/hotelsSlice';
import { fetchDestinations, createBooking } from '../services/api';

function* handleFetchDestinations() {
  try {
    const response = yield call(fetchDestinations);
    yield put(fetchDestinationsSuccess(response.data));
  } catch (error) {
    yield put(fetchDestinationsFailure(error.message));
  }
}

function* handleSubmitBooking(action) {
  try {
    yield call(createBooking, action.payload);
    yield put(submitBookingSuccess());
    yield put(fetchHotelsRequest());
    yield put(push('/hotels'));
  } catch (error) {
    yield put(submitBookingFailure(error.message));
  }
}

export function* bookingWatcher() {
  yield takeLatest(fetchDestinationsRequest.type, handleFetchDestinations);
  yield takeLatest(submitBookingRequest.type, handleSubmitBooking);
}