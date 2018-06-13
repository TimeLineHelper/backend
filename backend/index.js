'use strict';
require('dotenv').config();
let superagent = require('superagent');
let cookie = require('cookie');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
const express = require('express');
const app = express();

// app.use('/api/user', require('../routes/'));

app.get('/login', (req, res) => {
  if (!req.query.code) {
    res.redirect(process.env.CLIENT_URL);
  } else {
    console.log('CODE:', req.query.code);
    superagent.post('https://www.googleapis.com/oauth2/v4/token')
      .type('form')
      .send({
        code: req.query.code,
        grant_type: 'authorization_code',
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${process.env.API_URL}/oauth/google/code`
      })
      .then(response => {
        console.log('Response AFTER code is given', response.body);
        return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
          .set('Authorization', `Bearer ${response.body.access_token}`);
      })
      .then(response => {
        console.log('::::OPEN ID - GOOGLE PLUS::::', response.body);
        // handle oauth login
        res.cookie('X-Some-Cookie', 'some token');
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