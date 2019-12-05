import user from '../controllers/user';

export default (app) => {
  app.route('/users')
    .get(user.getUsers)
    .post(user.addUser)
};