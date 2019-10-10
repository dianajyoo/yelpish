import React from 'react';

const Search = ({ input, onChange }) => {
  return (
    <input
      type='text'
      className='search'
      id='input'
      value={input} 
      onChange={onChange}
    />
  );
}

export default Search;