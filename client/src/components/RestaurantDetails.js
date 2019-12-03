import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantDetails = ({ match, restaurant, name }) => {
  return (
    name === match.params.restaurantName ?
    <div className='restaurantDetails'>
      <RestaurantCard restaurant={restaurant} />
    </div>
    : <div></div>
  );
}

export default RestaurantDetails;