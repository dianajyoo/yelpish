import React from 'react';
import RestaurantCard from './RestaurantCard';

const listStyle = {
  display: 'table',
  margin: '0 auto',
  listStyleType: 'none'
}

const childListStyle = {
  padding: 10
}

const RestaurantList = ({ restaurants }) => {
  return (
    <ul className='restaurantList' style={listStyle}>
      {restaurants.map(restaurant => {
        return (
          <li style={childListStyle}>
            <RestaurantCard restaurant={restaurant} />
          </li>
        );
      })}
    </ul>
  );
}

export default RestaurantList;