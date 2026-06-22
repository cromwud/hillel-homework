import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSwapiData = createAsyncThunk(
  'swapi/fetchData',
  async (endpoint) => {
    
    const response = await fetch(`https://swapi.py4e.com/api/${endpoint}`);
    if (!response.ok) {
      throw new Error('Не вдалося отримати дані');
    }
    const data = await response.json();
    return data;
  }
);

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchSwapiData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSwapiData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSwapiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = null;
      });
  },
});

export default swapiSlice.reducer;