import jwt from 'jsonwebtoken';
import User from '../models/user';

exports.validate = (req, res, next) => {
  const { name, username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      console.log('Error registering user.', err);
      return res.status(500).send('Internal server error.');
    }

    if (!name && !username && !password) {
      return res
        .status(404)
        .send('Please enter valid name, username, and password.');
    }

    if (user) {
      return res.status(404).send('Username is taken.');
    }
  });

  next();
};

exports.authenticate = (req, res, next) => {
  const header = req.headers.authorization;
  const token = header && header.split(' ')[1];
  const SECONDS_IN_HOUR = 3600;

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .send({ success: false, message: 'Access forbidden.' });
    }

    req.userID = decoded.id;
    req.token = token;
  });

  next();
};

exports.setCookie = (req, res, next) => {
  const token = req.token;
  const SECONDS_IN_HOUR = 3600;

  res.cookie('token', token, {
    path: '/',
    maxAge: SECONDS_IN_HOUR,
    httpOnly: true,
    secure: false,
  });

  next();
};
