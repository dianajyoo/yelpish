import React from 'react';
import RestaurantCard from './restaurant_card';

const RestaurantDetails = ({ match, restaurant, name }) => {
  return name === match.params.restaurantName ? (
    <div>
      <RestaurantCard restaurant={restaurant} />
    </div>
  ) : (
    <div></div>
  );
};

export default RestaurantDetails;
