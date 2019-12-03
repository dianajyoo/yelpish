import React from 'react';

const inputStyle = {
  height: 25,
  width: 200,
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8
}

const Search = ({ input, onChange }) => {
  return (
    <input
      style={inputStyle}
      type='text'
      className='search'
      id='input'
      value={input} 
      onChange={onChange}
    />
  );
}

export default Search;