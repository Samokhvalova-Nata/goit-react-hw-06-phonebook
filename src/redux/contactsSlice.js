import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialContacts = {
    contactList: [
        {"id": "id-1", "name": "Rosie Simpson", "number": "459-12-56"},
        {"id": "id-2", "name": "Hermione Kline", "number": "443-89-12"},
        {"id": "id-3", "name": "Eden Clements", "number": "645-17-79"},
        {"id": "id-4", "name": "Annie Copeland", "number": "227-91-26"}
    ],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contactList.push(action.payload);
            },
            prepare(name, number) {
                    return{
                        payload: {
                            id: nanoid(),
                            name,
                            number,
                        },
                    };
            },
        },
        deleteContact(state, action) { 
            const index = state.contactList.findIndex(contact => contact.id === action.payload);
            state.contactList.splice(index, 1);
        },
    },
});

export const contactReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;


