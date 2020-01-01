import mongoose, { Schema } from 'mongoose';

const favoriteSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  restaurants: [{ name: String, photo: String, restaurant_id: String }]
}); 

export default mongoose.model('Favorite', favoriteSchema);