import React from 'react';
import {LoaderContainer} from './Loader.styled';
import { Oval } from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
  return (
     <LoaderContainer>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="#F9F0DA"
        secondaryColor="#A3D0C3"
      />
    </LoaderContainer>


  );
};

export default Loader;

