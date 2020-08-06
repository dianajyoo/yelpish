import styled from 'styled-components';

export const StyledFacet = styled.div`
  @media (min-width: 1025px) {
    margin-right: 5rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 500px) and (max-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Heading = styled.h1`
  font: 600 2.5rem 'DM Serif Display', serif;
  letter-spacing: 2px;
  color: #575c70;
  -webkit-text-emphasis: sesame;
  -moz-text-emphasis: sesame;
  text-emphasis: sesame;
`;

export const Subheading = styled.h2`
  font: bold 2rem Karla, sans-serif;
  color: #575c70;
  text-transform: uppercase;
`;

export const FacetItem = styled.div`
  width: 80%;
  padding: 20px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterItem = styled.div`
  padding: 10px;
  margin: 5px;
  font: bold 1.5rem Karla, sans-serif;
  color: #ff7a5c;
  background: #f7f7f8;
  border-radius: 7px;
  cursor: pointer;

  &:hover,
  &:active {
    background: #a8d0e6;
  }
`;
