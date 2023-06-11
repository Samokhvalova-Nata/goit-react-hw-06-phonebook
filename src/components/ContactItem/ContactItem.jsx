import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {Item, Text, Button} from './ContactItem.styled'

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
    return (
        <Item>
            <Text>{name}</Text>
            <Text>{number}</Text>
            <Button type='button'
                onClick={handleDelete}>
                Delete
            </Button>
        </Item>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};