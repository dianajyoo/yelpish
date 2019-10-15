import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants }) => {
  return (
    <ul className='restaurantList'>
      {restaurants.map(restaurant => {
        return <li><RestaurantCard restaurant={restaurant} /></li>;
      })}
    </ul>
  );
}

export default RestaurantList;