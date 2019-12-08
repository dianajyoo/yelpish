import mongoose from 'mongoose';

export default () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true})
    .catch(err => {
      console.log(err);
      process.exit(1);
    })
    .then(() => {
      console.log("Connected to database");
    });
};