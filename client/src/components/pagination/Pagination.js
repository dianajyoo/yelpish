import React from 'react';
import { StyledPagination } from './styles';

const Pagination = ({ handleClick }) => {
  return (
    <StyledPagination>
      <li onClick={handleClick} className='page'>
        1
      </li>
      <li onClick={handleClick} className='page'>
        2
      </li>
      <li onClick={handleClick} className='page'>
        3
      </li>
      <li onClick={handleClick} className='page'>
        4
      </li>
      <li onClick={handleClick} className='page'>
        5
      </li>
    </StyledPagination>
  );
};

export default Pagination;
