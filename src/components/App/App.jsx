import { Container, Titile, SubTitile } from './App.styled';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';

export const App = () => {
  return (
    <Container>
      <Titile>Phonebook</Titile>
      <ContactForm />
      <SubTitile>Contacts</SubTitile>
      <Filter/>
      <ContactList/>
    </Container>
  );
};
