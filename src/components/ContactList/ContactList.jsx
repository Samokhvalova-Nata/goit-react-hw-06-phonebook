import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled'
import { getVisibleContacts } from 'redux/selectors';


export const ContactList = () => {
    const visibleContacts = useSelector(getVisibleContacts);

    return (
        <List>
            {visibleContacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))}
        </List>
    );
};