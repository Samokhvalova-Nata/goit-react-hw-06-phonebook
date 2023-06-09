import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled'
import { getContacts, getFilter } from 'redux/selectors';


export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
    console.log('contacts', contacts);
    console.log('filter', filter);

    const getVisibleContacts = () => {
        const normalizeFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizeFilter)).sort((a, b) => a.name.localeCompare(b.name));
    };
    const visibleContacts = getVisibleContacts();

    return (
        <List>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    name={name}
                    number={number}
                >
                </ContactItem>
            ))}
        </List>
    );
};

