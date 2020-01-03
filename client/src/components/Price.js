import React from 'react';
import styled from 'styled-components';

const StyledPrice = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 15%;

  .header {
    font: bold 2rem Lato, sans-serif;
    color: #0e1111;
  }

  .filterWrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .filterItem {
      width: 25%;
      height: 3rem;
      cursor: pointer;
      border: 0.5px solid #D1D7E0;
      font: bold 1.5rem Lato, sans-serif;
      color: #374785;
      line-height: 3rem;

      &:hover, &:active {
        background: #A8D0E6;
      }
    }
  }
`

const Price = ({ handlePriceClick }) => {
  return (
    <StyledPrice>
      <h1 className='header'>Price</h1>

      <div className='filterWrapper'>
        <div className='filterItem' onClick={handlePriceClick}>
          $
        </div>
        <div className='filterItem' onClick={handlePriceClick}>
          $$
        </div>
        <div className='filterItem' onClick={handlePriceClick}>
          $$$
        </div>
        <div className='filterItem' onClick={handlePriceClick}>
          $$$$
        </div>
      </div>
    </StyledPrice>
  );
}

export default Price;