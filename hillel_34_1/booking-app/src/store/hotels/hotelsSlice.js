import { createSlice } from '@reduxjs/toolkit';

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchHotelsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchHotelsSuccess(state, action) {
      state.list = action.payload;
      state.loading = false;
    },
    fetchHotelsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchHotelsRequest,
  fetchHotelsSuccess,
  fetchHotelsFailure,
} = hotelsSlice.actions;

export default hotelsSlice.reducer;