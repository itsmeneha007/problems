import { createSlice } from '@reduxjs/toolkit';

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState: {
    data: [],
    loading: false,
    error: null,
    sort: 'asc', 
  },
  reducers: {
    fetchCoffeeStart: (state) => {
      state.loading = true;
    },
    fetchCoffeeSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchCoffeeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { fetchCoffeeStart, fetchCoffeeSuccess, fetchCoffeeFailure, setSortOrder } = coffeeSlice.actions;

export default coffeeSlice.reducer;