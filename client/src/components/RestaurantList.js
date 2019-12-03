import React from 'react';
import RestaurantCard from './RestaurantCard';
import '../fonts.css';

const listStyle = {
  display: 'table',
  margin: '0 auto',
  listStyleType: 'none'
}

const childListStyle = {
  padding: 10
}

const headerStyle = {
  fontFamily: 'Permanent Marker',
  fontSize: 100
}

const RestaurantList = ({ restaurants }) => {
  return (
    <React.Fragment>
      <h1 style={headerStyle}>Restaurant List</h1>
      <ul className='restaurantList' style={listStyle}>
        {restaurants.map(restaurant => {
          return (
            <li key={restaurant.venue.id} style={childListStyle}>
              <RestaurantCard restaurant={restaurant} />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default RestaurantList;