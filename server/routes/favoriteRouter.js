import favorite from '../controllers/favorite';

export default (app) => {
  app.route('/favorites')
    .get(favorite.getFavorites)
    .post(favorite.addFavorite)
};