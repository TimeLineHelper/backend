'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// change begin end and timestamp to dates()

var elementArray = new Schema(
  {
    name: 'string',
    description: 'string',
    id: { type: Number },
    timeStamp: { type: Number }

  });

const userSchema = new Schema({
  // make email unique right?
  email: { type: String, required: true },
  begin: { type: Number },
  end: { type: Number },
  id: { type: Number },
  tasks: { type: String },
  elements: [elementArray],

});


const User = mongoose.model('user', userSchema);

User.mongoOAUTH = function (data) {
  console.log('14 bleh from user.js', data);
  return User.findOne({ email: data.email })
    .then(user => {
      if (!user) {
        throw new Error('make a new user');
      }
      console.log('34 user model from user.js', user);
      return user;
    })
    .catch(() => {
      console.log(' 38 new user from user.js');
      return new User({
        email: data.email
      }).save();
    });
};

module.exports = User;
