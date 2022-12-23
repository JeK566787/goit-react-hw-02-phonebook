import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ filterInputChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={e => filterInputChange(e.target.value)} />
    </Label>
  );
};
Filter.propTypes = {
  filterInputChange: PropTypes.func.isRequired,
};
