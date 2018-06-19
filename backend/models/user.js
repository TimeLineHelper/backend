'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
  email: { type: String, required: true },
  tasksID: { type: Schema.Types.ObjectId, required: true }
});

const User = mongoose.model('user', userSchema);

User.mongoOAUTH = function (data) {
  console.log(data.email);
  // return User.findOne({ email: data.email })
  //   .then(user => {
  //     if (!user) {
  //       throw new Error('make a new user');
  //     }
  //     console.log('20 user model', user);
  //     return user;
  //   })
  //   .catch(() => {
  //     console.log(' 24 new user');
  //     return new User({
  //       email: data.email
  //     }).save();
  //   });
};

module.exports = User;
