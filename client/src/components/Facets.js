import React from 'react';
import Price from './Price';
import Distance from './Distance';
import styled from 'styled-components';

const StyledFacets = styled.div`
  width: 35%;
  height: 100vh;
  float: left;
  margin-right: 5rem;

  .header.title {
    font: bold 2.5rem Lato, sans-serif;
    color: #0e1111;
    margin-bottom: 25%;
  }
`

const Facets = ({ handlePriceClick, handleDistanceClick }) => {
  return (
    <StyledFacets>
      <h1 className='header title'>Filters</h1>

      <Price handlePriceClick={handlePriceClick} />
      <Distance handleDistanceClick={handleDistanceClick} />
    </StyledFacets>
  );
}

export default Facets;