'use strict';
const superagent = require('superagent');
const User = require('../models/user.js');
const fs = require('fs');
const express = require('express');
const jsonParser = require('body-parser').json();
const router = express.Router();
let { google } = require('googleapis');


const readline = require('readline');

const SCOPES = [
  'https://www.googleapis.com/auth/calendar'
];
const TOKEN_PATH = './timeline.js';

router.post('/api/user', jsonParser, function (req, res, next) {
  console.log('in timelines route b4 new user adding req', req.body);
  new User(req.body).save()
    .then(data => {
      console.log('data line 22', data);
      res.json(data);
    })
    .catch(next);
});

router.get('/api/user', function (req, res, next) {
  User.find({})
    .then(user => {
      console.log('data line 22', user);
      res.json(user);
    })
    .catch(next);
});






// router.get('/getcaldata', (req,res) => {
//   if(!req.query.code){
//     res.redirect(process.env.CLIENT_URL);
//   } else
//   console.log('rooot');
// }

// router.get('/callback', (req, res) => {
//   if (!req.query.code) {
//     res.redirect(process.env.CLIENT_URL);
//   } else {

//     superagent.post('https://www.googleapis.com/oauth2/v4/token')
//       .type('form')
//       .send({
//         code: req.query.code,
//         grant_type: 'authorization_code',
//         client_id: process.env.GOOGLE_CLIENT_ID,
//         client_secret: process.env.GOOGLE_CLIENT_SECRET,
//         redirect_uri: `${process.env.API_URL}/callback`
//       })
//       .then(response => {

//         console.log('35========== res.body', response.body);
//         return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
//         .set('Authorization', `Bearer ${response.body.access_token}`);
//       }).then( response => { 
//         console.log('open id google pluse', response);
//         return User.handleOAUTH(response.body); //////////////////////////////////create user and handel oauth
//       })
//       .catch(response => {
//         console.log('response', response.body);
//         //Initial request, not to be confused with the response we passed through 
//         res.cookie('cookie', cookieToken)
//         res.redirect(process.env.CLIENT_URL);
//       });
//   }
// });


module.exports = router;
