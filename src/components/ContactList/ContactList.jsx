import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selector';
import { DeleteBtn, Item, List } from './ContactList.style';

export const ContactList = () => {
  const dispatch = useDispatch();

  const NewFilterContactsList = useSelector(selectVisibleContacts);
  return (
    <List>
      {NewFilterContactsList.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact({ id }))}
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
