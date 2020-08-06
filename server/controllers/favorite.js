import Favorite from '../models/favorite';

exports.getFavorites = (req, res) => {
  Favorite.find({}, (err, favorites) => {
    if (err) {
      res.send(err);
    }

    res.json(favorites);
  });
};

exports.addFavorite = (req, res) => {
  const favorite = new Favorite(req.body);
  const user_id = favorite.user_id;
  const restaurant = favorite.restaurants[0];
  // const { name, photo, restaurant_id } = restaurant;

  Favorite.findOneAndUpdate(
    { user_id },
    { $addToSet: { restaurants: restaurant } },
    { safe: true, upsert: true, new: true },
    (err, result) => {
      if (err) {
        res.send(err);
      }

      res.json(result);
    }
  );
};
