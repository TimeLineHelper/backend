'use strict';

const Mongoose = require('mongoose');
const {Schema} = require('mongoose');


const userSchema =  new Schema({
  email: {type: String, required: true, unique: true},
  username: {type: String, required: true, unique: true},
  passwordHash: {type: String },
  tokenSeed: {type: String,  unique: true, default: ''},
});

const User = Mongoose.model('user', userSchema);

User.handleOAUTH = function(data) {
  console.log('userjs data',data);
};
module.exports = User;