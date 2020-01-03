import axios from 'axios';

// --> actionCreators <-- //

export const getQuery = (query) => {
  return {
    type: 'GET_QUERY',
    query
  };
};

export const getRestaurants = (restaurants, radius, price, page) => {
  return {
    type: 'GET_RESTAURANTS',
    restaurants,
    radius,
    price,
    page
  };
};

// --> thunk <-- //

export const setQuery = (query) => {
  return (dispatch) => {
    dispatch(getQuery(query));
  };
}; 

export const findRestaurants = (latitude, longitude, query, radius, price, page) => {
  return (dispatch) => {
    const URL = 'https://api.yelp.com/v3/businesses/search';
    const CORS_URL = 'https://cors-anywhere.herokuapp.com/';

    axios.get(CORS_URL + URL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      },
      params: {
        term: 'food',
        latitude: latitude,
        longitude: longitude,
        categories: query,
        radius: radius,
        price: price,
        limit: 50
      }
    })
    .then(res => dispatch(getRestaurants(res.data.businesses, radius, price, page)))
    .catch(err => console.log(err));
  };
};
