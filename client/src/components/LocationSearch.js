import React from 'react';

const inputStyle = {
  height: 25,
  width: 200,
  borderTopRightRadius: 8,
  borderBottomRightRadius: 8
}

const LocationSearch = ({ location, onChange }) => {
  return (
    <input
      style={inputStyle}
      type='text'
      className='location'
      id='location'
      value={location} 
      onChange={onChange}
    />
  );
}

export default LocationSearch;