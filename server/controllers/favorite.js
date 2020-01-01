import favorite from '../models/favorite';

exports.getFavorites = (req, res) => {
  favorite.find({}, (err, favorites) => {
    if(err) {
      res.send(err);
    }

    res.json(favorites);
  });
}

exports.addFavorite = (req, res) => {
  const newFavorite = new favorite(req.body);
  const user_id = newFavorite.user_id;
  const restaurant = newFavorite.restaurants[0];

  favorite.findOneAndUpdate(
    {user_id},
    {$push: {restaurants: restaurant}},
    {safe: true, upsert: true, new: true},
    (err, favorite) => {
      if(err) {
        res.send(err);
      }

      res.json(favorite);
    }
  );
}
