import auth from '../controllers/auth';

export const registerUser = (app) => {
  app.route('/register')
    .post(auth.registerUser)
};

export const verifyUser = (app) => {
  app.route('/verify')
    .get(auth.verifyUser)
};
