import { useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Container } from './Container';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import useLocalStorage from 'hooks/useLocalStorage';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

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
