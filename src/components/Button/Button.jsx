import PropTypes from 'prop-types';
import { Button } from './Button.styled.jsx';

const LoadMore = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMore;
