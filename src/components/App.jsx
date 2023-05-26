// import React from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { Loader } from 'Loader/Loader';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selector';
// import { Notification } from './Notification/Notification';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const contactList = useSelector(selectContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 20,
//         color: '#010101',
//       }}
//     >
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2> Contacts</h2>
//       {contactList.length > 0 && <Filter />}
//       {contactList.length === 0 ? (
//         <Notification notification={'There are no contacts.'} />
//       ) : (
//         <ContactList />
//       )}
//       {isLoading && !error && <Loader />}
//     </div>
//   );
// };

import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import Filter from './Filter/Filter';

import { ContactForm } from './ContactForm/ContactForm';

import { selectContacts, selectError, selectIsLoading } from 'redux/selector';
import { Notification } from './Notification/Notification';

import ContactList from './ContactList/ContactList';
import { Loader } from 'Loader/Loader';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contactList = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

      {contactList.length > 0 && <Filter />}
      {contactList.length === 0 ? (
        <Notification notification={'There are no contacts.'} />
      ) : (
        <ContactList />
      )}
      {isLoading && !error && <Loader />}
    </div>
  );
}
