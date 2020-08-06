import mongoose from 'mongoose';

export default () => {
  mongoose
    // .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017', {
    .connect('mongodb://127.0.0.1:27017', {
      useNewUrlParser: true,
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    })
    .then(() => {
      console.log('Connected to database');
    });
};
