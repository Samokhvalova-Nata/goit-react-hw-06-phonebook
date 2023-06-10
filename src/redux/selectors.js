export const getContacts = state => state.contacts.contactList;

export const getFilter = state => state.filter.filter;

export const getVisibleContacts = state => {
    const filter = getFilter(state);
    const contacts = getContacts(state);
    const normalizeFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)).sort((a, b) => a.name.localeCompare(b.name));
    };