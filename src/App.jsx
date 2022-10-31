import React, { Component } from 'react';
import { AppStyled } from './App.styled'
// toast
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// API
import * as API from 'components/API/API.js'
// components
import Searchbar from 'components/Searchbar/Searchbar';
import LoadMore from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Titles from 'components/Title/Title';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import { ModalImage } from 'components/Modal/Modal.styled';

export class App extends Component {
  state = {
    keyWord: '',
    searchResults: [],
    error:null,
    page: 1,
    status: "idle",
    totalHits: null,
    largeImage: '',
    loader: false,
    showModal:false,
}

async componentDidUpdate(_, prevState) {
    const { keyWord, page } = this.state

   if (prevState.keyWord !== keyWord) {
      this.setState({
        status: 'pending',
        searchResults: [],
        page: 1,
      });
      this.fetchRequest();
    }
  if (page !== prevState.page && page !== 1) {
    this.fetchRequest()
  }
  };


fetchRequest = async () => {
   const {keyWord , page} = this.state

    try {
      const result = await API.fetchApi(keyWord, page );

      if (result.length === 0) {
           this.setState({ status: 'idle' });
         return toast.warning(`${keyWord} not found`);
      }

      this.setState(prevState => ({
        searchResults: [...prevState.searchResults, ...result],
        status: 'resolved',
      }));
       if (page === 1) {
        return toast.success(`Enjoy`);
      }

    } catch (error) {
       this.setState({ error, status: 'rejected' });
      return toast.error(`Whoops something went wrong, please try again later`);
    } finally {
       this.setState({ loader: false });
    }

}



  onImgClick = event => {
    this.toggleModal();
    this.setState({ largeImage: event})
  }

  submitResultsForm = keyWord => {
    if (this.state.keyWord !== keyWord) {
       this.setState({
        keyWord: keyWord,
        page: 1,
      });
    }

      if (this.state.keyWord === keyWord) {
      return toast.warning(`You already searched for "${keyWord}"`);
    }
  }

   onLoadMoreBtn = () => {
    this.setState(prevState => ({page: prevState.page + 1,}));
   };

    toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }



  render() {
    const {submitResultsForm, toggleModal, onLoadMoreBtn, onImgClick} = this
    const { searchResults, status ,showModal, largeImage} = this.state;

    return (
      <>
        <Searchbar onSubmit={submitResultsForm} />
        <AppStyled>
          {status === 'idle' && <Titles />}
          {status === 'rejected' && <Titles />}
          {status === 'pending' && <Loader />}

          <ImageGallery searchResults={searchResults} onClick={onImgClick} />

          {showModal && (
            <Modal onClose={toggleModal}>
              <ModalImage
                src={largeImage}
                alt={largeImage.tags}
              />
            </Modal>
          )}

          {searchResults.length > 0 && <LoadMore onClick={onLoadMoreBtn} />}
      </AppStyled>
      <ToastContainer autoClose={3000} />
      </>
    );

  };

};
