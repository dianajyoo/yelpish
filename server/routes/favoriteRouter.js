import favorite from '../controllers/favorite';

export default (app) => {
  app
    .route('/api/favorites')
    .get(favorite.getFavorites)
    .post(favorite.addFavorite);
};
