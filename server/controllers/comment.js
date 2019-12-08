import comment from '../models/comment';

exports.getComments = (req, res) => {
  comment.find({}, (err, comments) => {
    if(err) {
      res.send(err);
    }

    res.json(comments);
  });
}

exports.addComment = (req, res) => {
  const newComment = new comment(req.body);

  newComment.save((err, comment) => {
    if(err) { 
      res.send(err) 
    }
    res.json(comment);
  });
}

exports.updateComment = (req, res) => {
  comment.findOneAndUpdate(
    { _id: req.params.commentId },
    req.body,
    (err, comment) => {
      if (err) {
        res.send(err);
      }

      res.json(comment);
    }
  );
}

exports.deleteComment = (req, res) => {
  comment.remove(
    { _id: req.params.commentId },
    (err) => {
      if(err) {
        res.send(err);
      }

      res.json({ message: 'Successfully deleted comment.' });
    }
  );
}