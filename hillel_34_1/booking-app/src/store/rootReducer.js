import { combineReducers } from '@reduxjs/toolkit';
import bookingReducer from './booking/bookingSlice';
import hotelsReducer from './hotels/hotelsSlice';

export const createRootReducer = (routerReducer) =>
  combineReducers({
    router: routerReducer,
    booking: bookingReducer,
    hotels: hotelsReducer,
  });