import  mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema({
  body: {
    type: String,
    required: 'Leave a comment.'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  upvotes: {
    type: Number,
    default: 0
  }
});

export default mongoose.model('Comment', commentSchema);
