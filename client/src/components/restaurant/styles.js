import styled from 'styled-components';

export const Restaurant = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  background: #f7f7f8;
`;

export const Restaurants = styled.ul`
  padding: 0;
  margin: 0;
  font: 2rem Karla, sans-serif;
  list-style-type: none;
  flex: 1;

  .restaurant {
    padding: 1.5rem 0;
  }
`;

export const Image = styled.div`
  min-width: 75px;
  width: 50%;
  min-height: 150px;
  height: auto;
  padding: 1rem;

  @media (min-width: 480px) {
    min-width: 200px;
    width: 33%;
  }
`;

export const Details = styled.ul`
  margin: 0 auto;
  padding: 0 1.5rem;
  display: table;
  list-style-type: none;
  font: 600 1.7rem Karla, sans-serif;
  color: #575c70;

  .tag {
    margin: 1.5rem 0;
    font-size: 1.5rem;
  }
`;

export const Like = styled.div`
  width: 2.5rem;
  height: auto;
  color: #ff7a5c;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
