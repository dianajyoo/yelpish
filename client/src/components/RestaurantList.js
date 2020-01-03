import React from 'react';
import RestaurantCard from './RestaurantCard';
import styled from 'styled-components';

const List = styled.ul`
  display: table;
  margin: 0 auto;
  list-style-type: none;
  font: 2rem Lato;

  .restaurant {
    padding: 1rem;
  }
`

const RestaurantList = ({ restaurants, like }) => {
  return (
    <React.Fragment>
      <List>
        {restaurants.map(restaurant => {
          return (
            <li key={restaurant.id} className='restaurant'>
              <RestaurantCard restaurant={restaurant} photo={restaurant.image_url} like={like} />
            </li>
          );
        })}
      </List>
    </React.Fragment>
  );
}

export default RestaurantList;