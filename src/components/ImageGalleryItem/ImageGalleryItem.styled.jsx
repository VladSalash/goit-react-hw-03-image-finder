import styled from 'styled-components';

export const ImageGalleryItem = styled.li`
/* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border: 1px solid #A3D0C3;
  width: 375px;
  height: 225px;
  margin-right: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  cursor: pointer; */

  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const ImageGalleryItemImage = styled.img`
 /* width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
  transform: scale(1.03);
  cursor: zoom-in;
}
`;

