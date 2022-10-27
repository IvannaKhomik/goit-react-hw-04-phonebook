import PropTypes from 'prop-types';
import { Title } from './Container.styled';

export const Container = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <div>{children}</div>
    </>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
