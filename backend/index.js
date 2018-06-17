'use strict';

const { google } = require('googleapis');
const superagent = require('superagent');
const cookie = require('cookie');
require('dotenv').config();

const express = require('express');
const app = express();

const privatekey = require('./client_secret.json');
// const seedTimeline = require('./lib/seedTimeline.js');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
// const MONGODB_URI = process.env.MONGODB_URI;

app.use('/home', require('./routes/timelineRouter.js'));

//make a route that uses quickstart as middleware

app.get('/callback', (req, res) => {
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
        redirect_uri: `${process.env.API_URL}/callback`
      })
      .then(response => {
        console.log('Response AFTER code is given');
        console.log('access token:', response.body.access_token);
        console.log('id token:', response.body.id_token);
        let idTokenPayload = response.body.id_token.split('.')[1];
        let decoded = Buffer.from(idTokenPayload, 'base64').toString();
        let json = JSON.parse(decoded);
        console.log('decoded:', decoded);
        // handle oauth login
        res.cookie('X-Some Cookie', idTokenPayload);
        res.write('<h1>' + json.name + '</h1>');
        res.write('<h1>' + json.email + '</h1>');
        res.write('<img src=' + json.picture + '>');
        res.end();
      })
      .catch(response => {
        console.log('response', response);
      });
  }
});

const server = module.exports = {};
server.isOn = false;
server.start = () => {
  return new Promise((resolve, reject) => {
    if(server.isOn) return reject(new Error('Server Error. Server already running.'));
    server.http = app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
      server.isOn = true;
      mongoose.connect(MONGODB_URI);
      return resolve(server);
    });
  });
};
server.stop = () => {
  return new Promise((resolve, reject) => {
    if(!server.isOn) return reject(new Error('Server Error. Server already stopped.'));
    server.http.close(() => {
      server.isOn = false;
      mongoose.disconnect();
      return resolve();
    });
  });
};

// app.get('/', (req, res) => {
//   res.send();
// });

const Bundler = require('parcel-bundler');
const bundler = new Bundler('./public/index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});