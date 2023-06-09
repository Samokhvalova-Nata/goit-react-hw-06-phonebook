import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
// import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
    key: 'contacts',
    storage,
};
const persistedContactReducer = persistReducer(persistConfig, contactReducer);

export const reducer = {
    contacts: persistedContactReducer,
    filter: filterReducer,
};
