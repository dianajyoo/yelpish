import React from 'react';
import RestaurantCard from './restaurant_card';
import { Restaurants } from './styles';

const RestaurantList = ({ restaurantID, restaurants, like }) => {
  return (
    <Restaurants>
      {restaurants.map((restaurant) => {
        return (
          <li key={restaurant.id} className='restaurant'>
            <RestaurantCard
              restaurantID={restaurantID}
              restaurant={restaurant}
              photo={restaurant.image_url}
              like={like}
            />
          </li>
        );
      })}
    </Restaurants>
  );
};

export default RestaurantList;
