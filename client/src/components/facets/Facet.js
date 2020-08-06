import React from 'react';
import { StyledFacet, Wrapper, Heading } from './styles';
import Price from './Price';
import Distance from './Distance';

const Facet = ({ handlePrice, handleDistance }) => {
  return (
    <StyledFacet>
      <Heading>Filters</Heading>
      <Wrapper>
        <Price handlePrice={handlePrice} />
        <Distance handleDistance={handleDistance} />
      </Wrapper>
    </StyledFacet>
  );
};

export default Facet;
