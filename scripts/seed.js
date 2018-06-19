let USERS =`
bleh@bleh.com,Adoree,MacGillespie
997,Nisse,Grellis
998,Todd,Vedeniktov
999,Ardyce,Macallam
1000,Michail,Clemendet}`;

USERS = USERS.split('\n');
USERS = USERS.map(user => {
  let cells = user.split(',');
  return {
    email: cell[0],
    begin: parseInt(cells[1]),
    name: cells[2],
    items: cells[3],
  };
});

require('dotenv').config();
const User = require('../models/userModel.js');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

USERS.forEach(user =>{
  User.create(user);
});

//name upper
//items lower 