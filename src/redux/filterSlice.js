import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filterKey: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filterKey = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const stateFilterKey = state => state.filter.filterKey;
