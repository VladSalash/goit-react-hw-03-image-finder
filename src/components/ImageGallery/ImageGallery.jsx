
import PropTypes from "prop-types";
import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import { ImageGallery } from './ImageGallery.styled.jsx';


const Gallery = ({ searchResults , onClick}) => {

  return (
    <ImageGallery>
      {searchResults.map(({id, webformatURL, tags, largeImageURL }) => (

          <GalleryItem
            key={id}
          tags={tags}
          webformatURL={webformatURL}
             onClick={() => onClick(largeImageURL)}
            />

      ))}
    </ImageGallery>
  );
};


Gallery.propTypes = {
    searchResults: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          webformatURL: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
           largeImageURL: PropTypes.string.isRequired,
        }),
  ),
   onClick: PropTypes.func.isRequired,
};

 export default Gallery;
