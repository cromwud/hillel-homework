import { all } from 'redux-saga/effects';
import { bookingWatcher } from './bookingSaga';
import { hotelsWatcher } from './hotelsSaga';

export default function* rootSaga() {
  yield all([bookingWatcher(), hotelsWatcher()]);
}