<<<<<<< HEAD
// let USERS =`
// bleh@bleh.com,1/2/9999,1/23/9999, blaaa, 
// 997,Nisse,Grellis
// 998,Todd,Vedeniktov
// 999,Ardyce,Macallam
// 1000,Michail,Clemendet}`;

// USERS = USERS.split('\n');
// USERS = USERS.map(user => {
//   let cells = user.split(',');
//   return {
//     email: cell[0],
//     begin: parseInt(cells[1]),
//     end: parseInt(cells[2]),
//     taskTitle: cells[3],
//     items: cells[4],
//   };
// });

// let USERS = {
// email: 'bleh@bleh',   
// begin: new Date(),
// end: new Date(),
// taskTitle : 'blllleeeehhhhh',
// items: [itemArray]
// }


// var itemArray = new Schema({ itemTitle: 'uuuuugggggg', description: 'striuuuuuggggggng'});
=======
let USERS = `
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
>>>>>>> 1871b020a13e2e556d705bc1a8fe7ac06da4cbc0

require('dotenv').config();
const User = require('../models/userModel.js');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

USERS.forEach(user => {
  User.create(user);
});

//name upper
//items lower 

email: { type: String, required: true},   
begin: new Date(),
end: new Date(),
taskTitle : { type: String, required: true},
items: [itemArray],

var itemArray = new Schema({ itemTitle: 'string', description: 'string'});
