require('dotenv').config();
const User = require('../models/user.js');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

User.find().limit(1)
  .then(user => {
    console.log('user', user);
    console.log('tasks', JSON.stringify(user[0].tasks));
    let el = {
      name: 'el name',
      description: 'el desc',
      id: 'el id',
      date: 'el date',
    };
    console.log('elements', user[0].tasks[0].elements);
    user[0].tasks[0].elements.push(el);
    return user[0].save();
  })
  .then(user2 => {
    console.log('user2', user2);
    mongoose.disconnect();
  });

//name upper
//items lower 