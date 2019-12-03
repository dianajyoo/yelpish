import { getComments, addComment } from './controllers/comment';

export default (app) => {
  app.route('/comments')
    .get(getComments)
    .post(addComment)
};