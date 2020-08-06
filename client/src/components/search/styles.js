import styled from 'styled-components';

export const Search = styled.div`
  padding: 10px 5%;
`;

export const Wrapper = styled.div`
  padding: 0 7%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;
