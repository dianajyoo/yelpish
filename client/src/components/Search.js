import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 30%;
  height: auto;
  margin-right: 1.5rem;
`

const Search = ({ input, onChange }) => {
  return (
    <Input
      type='text'
      id='input'
      value={input}
      placeholder='What do you want to eat today?'
      onChange={onChange}
    />
  );
}

export default Search;