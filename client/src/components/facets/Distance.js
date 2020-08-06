import React from 'react';
import { FacetItem, FilterWrapper, FilterItem, Subheading } from './styles';

const Distance = ({ handleDistance }) => {
  return (
    <FacetItem>
      <Subheading>Distance (miles)</Subheading>

      <FilterWrapper>
        <FilterItem onClick={handleDistance}>5</FilterItem>
        <FilterItem onClick={handleDistance}>10</FilterItem>
        <FilterItem onClick={handleDistance}>15</FilterItem>
        <FilterItem onClick={handleDistance}>20</FilterItem>
        <FilterItem onClick={handleDistance}>25</FilterItem>
      </FilterWrapper>
    </FacetItem>
  );
};

export default Distance;
