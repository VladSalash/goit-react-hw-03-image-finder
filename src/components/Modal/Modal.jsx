import React, { Component } from 'react';
import { Overlay, ModalBox } from './Modal.styled';

import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');


class Modal extends Component {

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
 return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBox>
          {this.props.children}
        </ModalBox>
      </Overlay>,
      modalRoot
    );
  }

}

export default Modal;

