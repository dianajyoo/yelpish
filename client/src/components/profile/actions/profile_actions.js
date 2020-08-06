import axios from 'axios';

export const getFavorites = (favorites) => {
  return {
    type: 'GET_FAVORITES',
    favorites,
  };
};

export const updateFavorites = (favorites) => {
  return {
    type: 'UPDATE_FAVORITES',
    favorites,
  };
};

export const resetFavorites = (favorites) => {
  return {
    type: 'RESET_FAVORITES',
    favorites,
  };
};

export const getAll = (id) => {
  return (dispatch) => {
    // const URL = 'https://yelpish-backend.herokuapp.com/favorites';
    const url = 'http://localhost:3000/favorites';

    axios({
      url,
      method: 'GET',
      withCredentials: true,
    })
      .then((res) => {
        const favorites = res.data;
        console.log('fsvorites', favorites);
        const userFavorites = favorites.filter((fave) => fave.user_id === id);
        console.log('userfaves', userFavorites);

        dispatch(getFavorites(userFavorites[0].restaurants));
      })
      .catch(console.log);
  };
};

export const update = (name, photo, restaurant_id, user_id) => {
  return (dispatch) => {
    // const URL = 'https://yelpish-backend.herokuapp.com/favorites';
    const url = 'http://localhost:3000/favorites';

    axios({
      url,
      method: 'POST',
      data: {
        user_id,
        restaurants: [{ name, photo, restaurant_id }],
      },
      withCredentials: true,
    })
      .then((res) => {
        dispatch(updateFavorites(res.data.restaurants));
      })
      .catch(console.log);
  };
};

export const reset = () => {
  return (dispatch) => {
    dispatch(resetFavorites([]));
  };
};
