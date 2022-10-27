import PropTypes from 'prop-types';
import { Item, ContactInfo, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteBtn onClick={() => onDeleteContact(id)} type="button">
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
