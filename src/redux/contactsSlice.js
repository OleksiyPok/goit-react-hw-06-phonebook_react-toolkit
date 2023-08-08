import { createSlice } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

//------------------------------------------------------
// REDUX-TOOLKIT (with builder, module 6.2 lesson)

// export const addContact = createAction('contact/add');
// export const deleteContact = createAction('contact/del');

// export const contactsReducer = createReducer(contactsInitialState, builder =>
//   builder
//     .addCase(addContact, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(deleteContact, (state, action) => {
//       return state.filter(contact => contact.id !== action.payload);
//     })
// );

//------------------------------------------------------
// REDUX-TOOLKIT (without builder, module 6.2)

// export const contactsReducer = createReducer(contactsInitialState, {
//   [addContact]: (state, action) => {
//     // return [...state, action.payload];
//     state.push(action.payload);
//   },
//   [deleteContact]: (state, action) => {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// });

//------------------------------------------------------
// REDUX

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const addContact = contactId => {
//   return {
//     type: 'contact/add',
//     payload: contactId,
//   };
// };

// export const deleteContact = contact => {
//   return {
//     type: 'contact/del',
//     payload: contact,
//   };
// };

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contact/add':
//       return [...state, action.payload];
//     case 'contact/del':
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };
