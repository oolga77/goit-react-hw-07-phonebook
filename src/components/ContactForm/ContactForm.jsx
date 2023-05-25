import { nanoid } from '@reduxjs/toolkit';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getContacts } from 'redux/selector';
import { Form, FormInput, Label, FormButton } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const addNewContact = {
      id: nanoid(),
      name,
      number,
    };
    handleChesk(addNewContact);
    setName('');
    setNumber('');
  };

  const handleChesk = addNewContact => {
    contactList.find(
      contact => contact.name.toLowerCase() === addNewContact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts.`)
      : dispatch(addContacts(addNewContact));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="number">
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
        />
      </Label>
      <FormButton type="submit" onSubmit={onSubmit}>
        Add contact
      </FormButton>
    </Form>
  );
};

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
