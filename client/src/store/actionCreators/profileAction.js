import axios from 'axios';

export const setFavorites = (favorites) => {
  return {
    type: 'SET_FAVORITES',
    favorites
  };
};

export const updateFavorites = (favorites) => {
  return {
    type: 'UPDATE_FAVORITES',
    favorites
  };
};

export const resetFavorites = (favorites) => {
  return {
    type: 'RESET_FAVORITES',
    favorites
  };
};

export const getFavorites = () => {
  return (dispatch) => {
    const URL = 'https://fooder-server.herokuapp.com/favorites';

    axios({
      method: 'GET',
      url: URL
    })
    .then(res => {
      const userId = localStorage.getItem('id');
      const favorites = res.data;
      const userFavorites = favorites.filter(fave => fave.user_id === userId);
      const result = userFavorites[0].restaurants;

      dispatch(setFavorites(result));
    })
    .catch(console.log);
  };
};

export const addFavorites = (name, photo, restaurant_id, user_id) => {
  return (dispatch) => {
    const URL = 'https://fooder-server.herokuapp.com/favorites';

    axios({
      method: 'POST',
      url: URL,
      data: {
        user_id,
        restaurants: [{ name, photo, restaurant_id }]
      }
    })
    .then(res => {
      dispatch(updateFavorites(res.data.restaurants));
    })
    .catch(console.log);
  };
};

export const resetFavoritesAfterLogout = () => {
  return (dispatch) => {
    const favorites = [];

    dispatch(resetFavorites(favorites));
  };
};