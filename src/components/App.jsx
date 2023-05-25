import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const saveContacts = localStorage.getItem('contacts');

  //   if (saveContacts !== null) {
  //     const parsedContacts = JSON.parse(saveContacts);
  //     return parsedContacts;
  //   }
  // });

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const handleChange = e => {
  //   const { value } = e.target;
  //   setFilter(value);
  // };

  // const handleSubmit = e => {
  //   const id = nanoid();
  //   const name = e.name;
  //   const number = e.number;
  //   const contactsLists = [...contacts];

  //   if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
  //     alert(`${name} is already in contacts.`);
  //   } else {
  //     contactsLists.push({ id, name, number });
  //   }

  //   setContacts(contactsLists);
  // };

  // const handleDelete = e => {
  //   setContacts(contacts.filter(contact => contact.id !== e));
  // };

  // const getFilteredContacts = () => {
  //   const filterContactsList = contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });

  //   return filterContactsList;
  // };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
