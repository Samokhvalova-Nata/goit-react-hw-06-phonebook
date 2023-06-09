import { FormStyled, Label, Input, Error, Button } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required().min(9),
})

const initialValues = {
    name: '',
    number: ''
};

export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
        const newName = contacts.some(contact =>
            contact.name.toLowerCase() === values.name.toLowerCase());
        if (newName) {
            return alert(`${values.name} is already in contacts`);
        }
        dispatch(addContact(values));
        resetForm();
    };

        return (
            <Formik 
                initialValues={initialValues} 
                onSubmit={handleSubmit}
                validationSchema={schema}>
                <FormStyled >
                    <Label htmlFor='name'>Name</Label>
                    <Input type="text" name="name" />
                    <ErrorMessage component={Error} name="name" />

                    <Label htmlFor='number'>Number</Label>
                    <Input type="tel" name="number" />
                    <ErrorMessage component={Error} name="number"/>
                    <Button type="submit">Add contact</Button>
                </FormStyled>
            </Formik>
        );
};