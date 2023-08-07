import { createAction, createReducer } from '@reduxjs/toolkit';

const filterInitialState = {
  filterKey: '',
};

export const setFilter = createAction('filter/setFilter');
//

export const filterReducer = createReducer(filterInitialState, builder =>
  builder.addCase(setFilter, (state, action) => {
    return { ...state, filterKey: action.payload };
  })
);

//------------------------------------------------------

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
