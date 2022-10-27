import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 400px;
  border: 1px solid #148f77;
  border-radius: 8px;
`;
export const FormLabel = styled.label`
  margin-bottom: 12px;
  font-weight: 500;
  color: #0b5345;
`;
export const InputField = styled.input`
  width: 200px;
  padding: 12px;
  outline: 0;
  margin-bottom: 24px;
  border: 1px solid #148f77;
  border-radius: 4px;
  transition: border-color 250ms ease-out;
  &:first-of-type {
    margin-bottom: 16px;
  }
  &:hover {
    border-color: #0b5345;
  }

  &:focus,
  &:active {
    border: none;
    box-shadow: 2px 2px 8px #0b5345;
  }

  &:placeholder {
    font-size: 8px;
  }
`;

export const SubmitBtn = styled.button`
  width: 150px;
  margin-bottom: 16px;
  border-color: #0b5345;
  background-color: #ffffff;
  transition: border-color 250ms ease-out, background-color 250ms ease-out,
    color 250ms ease-out;
  &:hover,
  &:focus {
    background-color: #0b5345;
    color: #ffffff;
    border-color: transparent;
  }
`;
