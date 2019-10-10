import React from 'react';

const LocationSearch = ({ location, onChange }) => {
  return (
    <input
      type='text'
      className='location'
      id='location'
      value={location} 
      onChange={onChange}
    />
  );
}

export default LocationSearch;