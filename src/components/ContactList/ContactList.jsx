import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Contact, DeleteBtn, Item, List } from './ContactList.style';
import { selectVisibleContacts } from 'redux/selector';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const NewFilteredContactsList = useSelector(selectVisibleContacts);

  return (
    <List>
      {NewFilteredContactsList.map(({ id, name, phone }) => (
        <Contact key={id}>
          <Item>
            {name}: {phone}
          </Item>
          <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
            Delete
          </DeleteBtn>
        </Contact>
      ))}
    </List>
  );
};
export default ContactList;
