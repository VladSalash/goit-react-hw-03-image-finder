import React, { Component } from 'react';
import { Header, Form, Button, ButtonLabel, Input } from './Searchbar.styled';

// Toaster
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Searchbar extends Component {
  state = {
    category: '',
  };

  handleChange = event => {
    this.setState({ category: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { category } = this.state;

    event.preventDefault();

    if (category.trim() === '') {
      return toast.info('Please enter category name');
    }

    this.props.onSubmit(category);
    this.reset();
  };

  reset = () => {
    this.setState({
      category: '',
    });
  };

  render() {
    const { category } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            value={category}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
