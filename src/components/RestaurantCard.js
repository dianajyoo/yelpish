import React from 'react';

const divStyle = {
  display: 'flex'
}

const listStyle = {
  display: 'table',
  margin: '0 auto',
  listStyleType: 'none'
}

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className='restaurantCard' style={divStyle}>
      <img src={'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'} alt='restaurantImage' />

      <ul className='restaurantDetails' style={listStyle}>
        <li>{restaurant.venue.name}</li>
        {restaurant.venue.location.formattedAddress.map(line => {
          return <li>{line}</li>;
        })}
        {restaurant.venue.categories.map(category => {
          return <li>#{category.shortName.toLowerCase().replace(/\s/g, '')}</li>;
        })}
      </ul>
    </div>
  );
}

export default RestaurantCard;