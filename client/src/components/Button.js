import React from 'react';
import search from '../images/search.png';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 10rem;
  height: 10rem;
  border: 0;
  background: transparent;
  transition: transform 0.5s;

  .searchImg {
    width: 4rem;
    height: 4rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const Button = () => {
  return (
    <StyledButton type='submit'>
      <img src={search} className='searchImg' alt='search' />
    </StyledButton>
  );
}

export default Button;