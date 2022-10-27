import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 8px;
`;

export const ContactInfo = styled.p`
  display: inline-block;
  margin-right: 12px;
`;

export const DeleteBtn = styled.button`
  background-color: #ffffff;
  color: #34495e;
  border-color: #34495e;
  transition: background-color 250ms ease-out, color 250ms ease-out;
  &:hover {
    background-color: #34495e;
    color: #ffffff;
  }
`;
