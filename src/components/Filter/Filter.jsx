import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={value}
        type="text"
        onChange={onChangeFilter}
      ></FilterInput>
    </FilterLabel>
  );
};
