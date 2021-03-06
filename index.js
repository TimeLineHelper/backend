'use strict';

const express = require('express');
const app = express();
const User = require('./models/user.js');
const superagent = require('superagent');

require('dotenv').config();

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/timelinehelper');
mongoose.connect(process.env.MONGOLAB_CYAN_URI);

// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI);

app.use('/', require('./routes/timelineRouter'));
// app.use('/home', require('./routes/timelineRouter.js'));

app.get('/callback', (req, res) => {
  if (!req.query.code) {
    // console.log('inside get line 21');
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
        console.log('46 response body', response.body.email);
        res.redirect(`http://localhost:3000/create-timeline/?userurl=${response.body.email}`);
        // res.write('<h1>' + response.body.email + '</h1>');
        // res.write('<h1>' + response.body.name + '</h1>');
        // res.write('<img src=' + response.body.picture + '>');
        res.end();
      })
      .catch(response => {
        // console.log('response!!!!!!!!!!!!!!!!!!!!!!!!!!!!11  index.js line 43', response.body);
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