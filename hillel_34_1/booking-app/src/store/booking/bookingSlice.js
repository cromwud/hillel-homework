import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    destinations: [],
    loading: false,
    error: null,
    submitted: false,
  },
  reducers: {
    fetchDestinationsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDestinationsSuccess(state, action) {
      state.destinations = action.payload;
      state.loading = false;
    },
    fetchDestinationsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    submitBookingRequest(state) {
      state.loading = true;
      state.error = null;
      state.submitted = false;
    },
    submitBookingSuccess(state) {
      state.loading = false;
      state.submitted = true;
    },
    submitBookingFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchDestinationsRequest,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
  submitBookingRequest,
  submitBookingSuccess,
  submitBookingFailure,
} = bookingSlice.actions;

export default bookingSlice.reducer;