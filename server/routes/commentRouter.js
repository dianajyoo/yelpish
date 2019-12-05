import comment from '../controllers/comment';
          
export default (app) => {
  app.route('/comments')
    .get(comment.getComments)
    .post(comment.addComment)
};