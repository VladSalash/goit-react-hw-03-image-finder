import React, { Component } from 'react';

import { fetchApi } from 'API/api.js';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { animateScroll as Scroll } from 'react-scroll';

import Searchbar from 'components/Searchbar/Searchbar';
import LoadMore from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Titles from 'components/Title/Title';
import Loader from 'components/Loader/Loader';
import Container from 'components/Container/Container';
import Modal from 'components/Modal/Modal';

export class App extends Component {
  state = {
    keyWord: '',
    searchResults: [],
    error: null,
    page: 1,
    status: 'idle',
    largeImage: '',
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    const { keyWord, page } = this.state;

    if (prevState.keyWord !== keyWord) {
      this.setState({
        status: 'pending',
        searchResults: [],
        page: 1,
      });
      this.fetchRequest();
    }

    if (page !== prevState.page && page !== 1) {
      this.fetchRequest();
    }
  }

  fetchRequest = async () => {
    const { keyWord, page } = this.state;

    try {
      const result = await fetchApi(keyWord, page);

      if (result.length === 0) {
        this.setState({ status: 'idle' });
        return toast.warning(`${keyWord} not found`);
      }

      this.setState(prevState => ({
        searchResults: [...prevState.searchResults, ...result],
        status: 'resolved',
      }));

      Scroll.scrollToBottom();

      if (page === 1) {
        return toast.success(`Enjoy`);
      }
    } catch (error) {
      this.setState({ error, status: 'rejected' });
      return toast.error(`Whoops something went wrong, please try again later`);
    } finally {
      this.setState({ loader: false });
    }
  };

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
  };

  onLoadMoreBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onImgClick = event => {
    this.toggleModal();
    this.setState({ largeImage: event });
  };

  scrollToBottom = () => {
    Scroll.scrollToBottom();
  };

  render() {
    const { submitResultsForm, toggleModal, onLoadMoreBtn, onImgClick } = this;
    const { searchResults, status, showModal, largeImage } = this.state;

    return (
      <>
        <Searchbar onSubmit={submitResultsForm} />
        <Container>
          {status === 'idle' && <Titles />}
          {status === 'rejected' && <Titles />}
          {status === 'pending' && <Loader />}

          <ImageGallery searchResults={searchResults} onClick={onImgClick} />

          {showModal && (
            <Modal onClose={toggleModal}>
              <img src={largeImage} alt={largeImage.tags} />
            </Modal>
          )}

          {searchResults.length > 0 && <LoadMore onClick={onLoadMoreBtn} />}
        </Container>

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
