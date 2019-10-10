import React from 'react';
import Button from './Button';

class Search extends React.Component {
  state = {
    input: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    this.clearInput();
  }

  clearInput = () => {
    this.setState({
      input: ''
    });
  }

  render() {
    const { input } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            className='search'
            id='input'
            value={input} 
            onChange={this.handleChange}
          />
          <Button />
        </form>
      </div>
    );
  }
}

export default Search;