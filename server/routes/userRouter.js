import { getUsers, addUser } from './controllers/user';

export default (app) => {
  app.route('/users')
    .get(getUsers)
    .post(addUser)
};