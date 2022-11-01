import PropTypes from 'prop-types';
import { Box } from './Container.styled';

const Container = ({ children }) => {
  return <Box>{children}</Box>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
