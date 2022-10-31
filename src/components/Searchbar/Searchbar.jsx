import React, { Component } from 'react';

// Toaster
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';


class Searchbar extends Component {
  state = {
    category: '',
  }

   handleChange = event => {
     this.setState({ category: event.currentTarget.value.toLowerCase() });
    };

  handleSubmit = event => {
    const { category } = this.state;
    const { onSubmit } = this.props;

     event.preventDefault();

      if (category.trim() === '') {
      return toast.info('Please enter category name');
    }

     onSubmit(category);
     this.reset();
   }

  reset = () => {
    this.setState({
    category: '',
    });
  }


  render() {
  const { category } = this.state;
   return (
    <Header>
  <Form onSubmit={this.handleSubmit}>
    <Input
           value={category}
           onChange={this.handleChange}
      type="text"
      placeholder="Search images and photos"
         />
         <Button type="submit" >
      <ButtonLabel>Search</ButtonLabel>
    </Button>
  </Form>
</Header>
  )
  }

}


export default Searchbar;
