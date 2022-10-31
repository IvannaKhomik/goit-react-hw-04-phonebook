import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Container } from './Container';
import { nanoid } from 'nanoid';
import { defaultContacts } from '../utils/data';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import useLocalStorage from 'hooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  const formSubmit = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const contactName = contact.name;
    const isInclude = contacts.some(item => contactName === item.name);

    Notify.init({
      position: 'center-top',
    });

    isInclude
      ? Notify.failure(`${contactName} is already in contacts.`)
      : setContacts(contacts => [contact, ...contacts]);
  };

  const onChangeFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const onFilteredList = () => {
    if (filter === '') {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = onFilteredList();

  return (
    <>
      <Container title="Phonebook">
        <ContactForm addContact={formSubmit} />
      </Container>

      <Container title="Contacts">
        <Filter value={filter} onChangeFilter={onChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      </Container>
    </>
  );
};
