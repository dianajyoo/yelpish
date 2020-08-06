import React from 'react';
import { FacetItem, FilterWrapper, FilterItem, Subheading } from './styles';

const Price = ({ handlePrice }) => {
  return (
    <FacetItem>
      <Subheading>Price</Subheading>

      <FilterWrapper>
        <FilterItem onClick={handlePrice}>$</FilterItem>
        <FilterItem onClick={handlePrice}>$$</FilterItem>
        <FilterItem onClick={handlePrice}>$$$</FilterItem>
        <FilterItem onClick={handlePrice}>$$$$</FilterItem>
      </FilterWrapper>
    </FacetItem>
  );
};

export default Price;
