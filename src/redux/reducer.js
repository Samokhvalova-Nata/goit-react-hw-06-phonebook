import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contactList']
};

const persistedContactReducer = persistReducer(persistConfig, contactReducer);

export const reducer = {
    contacts: persistedContactReducer,
    filter: filterReducer,
};
