import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className='restaurantCard'>
      {restaurant.venue.name}
    </div>
  );
}

export default RestaurantCard;