import PropTypes from 'prop-types';
import {
  ImageGalleryItem,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled.jsx';

const GalleryItem = ({ webformatURL, tags, onClick }) => {
  return (
    <ImageGalleryItem onClick={onClick}>
      <ImageGalleryItemImage src={webformatURL} alt={tags} />
    </ImageGalleryItem>
  );
};

GalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryItem;
