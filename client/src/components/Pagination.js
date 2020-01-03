import React from 'react';
import styled from 'styled-components';

const StyledPagination = styled.ul`
  width: 40vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font: bold 1.5rem Lato;
  list-style-type: none;
  padding-top: 5rem;
  padding-bottom: 2.5rem;

  .pageNumber {
    cursor: pointer;
  }
`

const Pagination = ({ handleClick }) => {
  return (
    <StyledPagination>
      <li onClick={handleClick} className='pageNumber'>1</li>
      <li onClick={handleClick} className='pageNumber'>2</li>
      <li onClick={handleClick} className='pageNumber'>3</li>
      <li onClick={handleClick} className='pageNumber'>4</li>
      <li onClick={handleClick} className='pageNumber'>5</li>
    </StyledPagination>
  );
}

export default Pagination;