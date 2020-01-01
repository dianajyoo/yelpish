import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/user';

dotenv.config();

exports.registerUser = (req, res) => {
  const HASHED_PASSWORD = bcrypt.hashSync(req.body.newPassword, 8);
  const SECONDS_IN_A_DAY = 86400;

  User.create({
    name: req.body.name,
    username: req.body.newUsername,
    password: HASHED_PASSWORD
  }, (err, user) => {
    if(err) {
      return res.status(500).send('There was a problem with registering user.');
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: SECONDS_IN_A_DAY
    });

    res.status(200).send({ auth: true, token: token });
  });
}

exports.verifyUser = (req, res) => {
  const TOKEN = req.headers.token || JSON.stringify(req.headers.token) || req.headers['x-access-token'];

  if(!TOKEN) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }
  
  jwt.verify(TOKEN, process.env.SECRET, (err, decoded) => {
    if(err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    
    User.findById(decoded.id, (err, user) => {
      // omit password from being returned at endpoint
      { password: 0 }

      if(err) {
        return res.status(500).send('Cannot find user.');
      } 
      if(!user) {
        return res.status(404).send('User not found.');
      }

      res.status(200).send(user);
    });
  });
}

exports.loginUser = (req, res) => {
  const SECONDS_IN_A_DAY = 86400;

  User.findOne({ username: req.body.username }, (err, user) => {
    if(err) {
      return res.status(500).send('Server error.');
    }
    if(!user) {
      return res.status(404).send('User not found.');
    }

    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    if(!isPasswordValid) {
      return res.status(401).send('Password not valid.');
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: SECONDS_IN_A_DAY
    });

    res.status(200).send({ auth: true, token: token });
  });
}
