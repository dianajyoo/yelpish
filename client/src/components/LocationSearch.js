import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 20%;
  height: auto;
  margin-right: 1.5rem;
`

const LocationSearch = ({ location, onChange }) => {
  return (
    <Input
      type='text'
      id='location'
      value={location}
      onChange={onChange}
    />
  );
}

export default LocationSearch;