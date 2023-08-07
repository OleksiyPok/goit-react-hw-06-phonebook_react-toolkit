import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
//------------------------------------------------------
// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';

// import { devToolsEnhancer } from '@redux-devtools/extension';

// const enhancer = devToolsEnhancer();

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// export const store = createStore(rootReducer, enhancer);
