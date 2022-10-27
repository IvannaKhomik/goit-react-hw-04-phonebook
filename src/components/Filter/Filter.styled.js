import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 24px;
  font-weight: 500;
  color: #34495e;
`;
export const FilterInput = styled.input`
  margin-left: 12px;
  width: 200px;
  padding: 8px;
  outline: 0;
  border: 1px solid #34495e;
  border-radius: 4px;
  transition: border-color 250ms ease-out;

  &:hover {
    border-color: #34495e;
  }

  &:focus,
  &:active {
    border: none;
    box-shadow: 2px 2px 8px #34495e;
  }
`;
