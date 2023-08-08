import { createSlice } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

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

//------------------------------------------------------
// REDUX-TOOLKIT

// export const setFilter = createAction('filter/setFilter');

// export const filterReducer = createReducer(filterInitialState, builder =>
//   builder.addCase(setFilter, (state, action) => {
//     return { ...state, filterKey: action.payload };
//   })
// );

//------------------------------------------------------
// REDUX

// const filterInitialState = {
//   filterKey: '',
// };

// export const setFilter = queryString => {
//   return {
//     type: 'filter/setFilter',
//     payload: queryString,
//   };
// };

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter/setFilter':
//       return { ...state, filterKey: action.payload };
//     default:
//       return state;
//   }
// };
