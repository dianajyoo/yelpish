import React from 'react';
import styled from 'styled-components';
import heart from '../images/heart.png';

const Restaurant = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 0.5px solid #D1D7E0;

  .restaurantImg {
    width: 25%;
    height: auto;
    padding: 1rem;
  }

  .restaurantDetails {
    display: table;
    margin: 0 auto;
    list-style-type: none;
    font: 1.5rem Lato;
    color: #0e1111;
    padding: 1rem;
  }

  .restaurantName {
    font-size: 2rem;
    font-weight: bold;
  }

  .heart {
    width: 2.5rem;
    height: auto;
    position: relative;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`

const RestaurantCard = ({ restaurant, photo, like }) => {
  const address = restaurant.location.display_address.map(line => {
    return <li>{line}</li>;
  });
  const tags = restaurant.categories.map(category => {
    return '#' + category.alias.replace(/\s/g, '');
  });

  return (
    <Restaurant>
      <img src={photo} className='restaurantImg' alt='restaurant' />

      <ul className='restaurantDetails'>
        <li className='restaurantName'>{restaurant.name}</li>
        {address}

        <br />

        <li>{tags.length > 1 ? tags.join(', ') : tags}</li>
      </ul>

      <img
        src={heart}
        data-id={restaurant.id}
        data-name={restaurant.name}
        data-photo={restaurant.image_url}
        className='heart'
        alt='heart'
        onClick={like}
      />
    </Restaurant>
  );
}

export default RestaurantCard;