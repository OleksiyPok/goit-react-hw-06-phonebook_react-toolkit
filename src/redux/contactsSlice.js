import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsInitialState } from './contactsInitialState';

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.contactsList.push(action.payload);
    },
    deleteContact(state, action) {
      return {
        contactsList: state.contactsList.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

const persistConfig = {
  key: 'contact',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
