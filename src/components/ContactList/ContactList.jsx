import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selector';
import { DeleteBtn, Item, List } from './ContactList.style';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const NewFilterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {NewFilterContactsList.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContacts({ id }))}
          >
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
export default ContactList;
