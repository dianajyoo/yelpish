import React from 'react';
import { Restaurant, Image, Details, Like } from './styles';

const RestaurantCard = ({ restaurantID, restaurant, photo, like }) => {
  const location = restaurant.location.display_address.map((line, idx) => {
    return <li key={`location-${idx}`}>{line}</li>;
  });
  const tags = restaurant.categories.map((category, idx) => {
    return '#' + category.alias.replace(/\s/g, '');
  });

  return (
    <Restaurant>
      <Image
        style={{
          backgroundImage: `url(${photo})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'noRepeat',
        }}
      ></Image>
      <Details>
        <li>{restaurant.name}</li>
        {location}
        <li className='tag'>{tags.length > 1 ? tags.join(', ') : tags}</li>
      </Details>
      <Like
        data-id={restaurant.id}
        data-name={restaurant.name}
        data-photo={restaurant.image_url}
        alt='Like'
        onClick={like}
      >
        <i
          className={
            (restaurantID === restaurant.id ? 'fas' : 'far') + ' fa-heart'
          }
        ></i>
      </Like>
    </Restaurant>
  );
};

export default RestaurantCard;
