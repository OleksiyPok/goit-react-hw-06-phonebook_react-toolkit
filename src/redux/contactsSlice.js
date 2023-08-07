import { createAction } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const addContact = createAction('contact/add');
export const deleteContact = createAction('contact/del');

// export const contactsReducer = createReducer(contactsInitialState, builder =>
//   builder
//     .addCase(add, (state, action) => {
//       return [...state, action.payload];
//     })
//     .addCase(del, (state, action) => {
//       return state.filter(contact => contact.id !== action.payload);
//     })
// );

//------------------------------------------------------
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
//     type: 'contact/delete',
//     payload: contact,
//   };
// };

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contact/add':
      return [...state, action.payload];
    case 'contact/del':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};
