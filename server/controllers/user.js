import user from '../models/user';

exports.getUsers = (req, res) => {
  user.find({}, (err, users) => {
    if(err) {
      res.send(err);
    }

    res.json(users);
  })
}

exports.addUser = (req, res) => {
  const newUser = new user(req.body);

  newUser.save((err, user) => {
    if(err) { 
      res.send(err) 
    }
    res.json(user);
  });
}