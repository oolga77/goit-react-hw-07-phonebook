import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import { selectFilters } from 'redux/selector';
import { Input, Label } from './Filter.style';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleFilterChange = event =>
    dispatch(filterContacts(event.currentTarget.value));

  return (
    <Label>
      Find contacts by Name
      <Input
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

export default Filter;
