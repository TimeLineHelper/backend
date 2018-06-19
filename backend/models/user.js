'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemArray = new Schema(
  {
    itemTitle: 'string',
    description: 'string',
    id: { type: Number, required: true },
    timeStamp: { type: Number, required: true }

  });

const userSchema = new Schema({
  email: { type: String, required: true },
  begin: { type: Number, required: true },
  end: { type: Number, required: true },
  id: { type: Number, required: true },
  taskTitle: { type: String, required: true },
  items: [itemArray],

});


const User = mongoose.model('user', userSchema);

User.mongoOAUTH = function (data) {
  console.log('14 bleh', data);
  return User.findOne({ email: data.email })
    .then(user => {
      if (!user) {
        throw new Error('make a new user');
      }
      console.log('34 user model', user);
      return user;
    })
    .catch(() => {
      console.log(' 38 new user');
      return new User({
        email: data.email
      }).save();
    });
};

module.exports = User;
