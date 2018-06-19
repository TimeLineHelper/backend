'use strict';
require('dotenv').config();
let { google } = require('googleapis');
let privatekey = require('./client_secret.json');
let superagent = require('superagent');
let cookie = require('cookie');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/timelinehelper');
const express = require('express');
const app = express();
const User = require('./models/user.js');

app.use('/', require('./routes/timelineRouter'));

//make a route that uses quickstart as middleware

app.get('/callback', (req, res) => {
  if (!req.query.code) {
    console.log('inside get line 21');
    res.redirect(process.env.CLIENT_URL);

  } else {

    superagent.post('https://www.googleapis.com/oauth2/v4/token')
      .type('form')
      .send({
        code: req.query.code,
        grant_type: 'authorization_code',
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.API_URL}/callback`
      })
      .then(response => {

        return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
          .set('Authorization', `Bearer ${response.body.access_token}`);
      })
      .then(response => {
        User.mongoOAUTH(response.body);
      })
      .catch(response => {
        console.log('response!!!!!!!!!!!!!!!!!!!!!!!!!!!!11  index.js line 43', response.body);
        //Initial request, not to be confused with the response we passed through 
        res.cookie('cookie', cookieToken);
        res.redirect(process.env.CLIENT_URL);
      });
  }
});

const Bundler = require('parcel-bundler');
const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});