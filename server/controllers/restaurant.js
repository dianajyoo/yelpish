import restaurant from '../models/restaurant';

exports.getRestaurants = (req, res) => {
  restaurant.find({}, (err, restaurants) => {
    if(err) {
      res.send(err);
    }

    res.json(restaurants);
  });
}

exports.getRestaurant = (res, res) => {
  restaurant.findById(req.params.restaurantId, (err, restaurant) => {
    if(err) {
      res.send(err);
    }

    res.json(restaurant);
  });
}
