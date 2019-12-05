import restaurant from '../controllers/restaurant';

export default (app) => {
  app.route('/restaurants')
    .get(restaurant.getRestaurants)
    .post(restaurant.addRestaurant)
};