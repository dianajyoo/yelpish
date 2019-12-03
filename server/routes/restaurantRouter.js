import { getRestaurants, addRestaurant } from './controllers/restaurant';

export default (app) => {
  app.route('/restaurants')
    .get(getRestaurants)
    .post(addRestaurant)
};