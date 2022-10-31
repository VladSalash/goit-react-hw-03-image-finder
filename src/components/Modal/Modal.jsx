import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalBox } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
    static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillMount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

   handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
 if (event.currentTarget === event.target) {
      this.props.onClose();
    }
}



  render() {
    const { largeImageURL, tags } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBox>
          <img src={largeImageURL} alt={tags} />
        </ModalBox>
      </Overlay>,
      modalRoot
    );
  }

}

export default Modal;

