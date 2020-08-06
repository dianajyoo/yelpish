import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/user';

dotenv.config();

exports.registerUser = async (req, res) => {
  const { name, username, password } = req.body;
  const HASHED_PASSWORD = bcrypt.hashSync(password, 8);
  const SECONDS_IN_HOUR = 3600;

  User.create(
    {
      name,
      username,
      password: HASHED_PASSWORD,
    },
    (err, user) => {
      if (err) {
        return res.status(500).send('Internal server error.');
      }

      if (!user) {
        return res
          .status(404)
          .send('Cannot register at this time. Try again later.');
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: SECONDS_IN_HOUR,
      });

      return res.status(200).send({ success: true, token, user });
    }
  );
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const SECONDS_IN_HOUR = 3600;

  User.findOne({ username }, (err, user) => {
    if (err) {
      console.log('Cannot log in user.', err);
      return res.status(500).send('Internal server error.');
    }

    if (!user) {
      return res.status(404).send('User not found.');
    }

    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) {
      return res.status(401).send('Incorrect password.');
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: SECONDS_IN_HOUR,
    });

    return res.status(200).send({ success: true, token, user });
  });
};

exports.verifyUser = (req, res) => {
  const { token, userID } = req;

  if (!token && !userID) {
    return res.status(401).send({ success: false, message: 'Not authorized.' });
  }

  return res.status(200).json({ success: true, token, userID });
};
