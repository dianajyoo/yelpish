import React from 'react';
import styled from 'styled-components';

const StyledDistance = styled.div`
  width: 80%;
  margin: 0 auto;

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

const Distance = ({ handleDistanceClick }) => {
  return (
    <StyledDistance>
      <h1 className='header'>Distance</h1>

      <div className='filterWrapper'>
        <div className='filterItem' onClick={handleDistanceClick}>
          5
        </div>
        <div className='filterItem' onClick={handleDistanceClick}>
          10
        </div>
        <div className='filterItem' onClick={handleDistanceClick}>
          15
        </div>
        <div className='filterItem' onClick={handleDistanceClick}>
          20
        </div>
        <div className='filterItem' onClick={handleDistanceClick}>
          25
        </div>
      </div>
    </StyledDistance>
  );
}

export default Distance;