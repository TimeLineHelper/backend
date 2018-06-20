'use strict';

const superagent = require('superagent');
const User = require('../models/user.js');
// const Timeline = require('../models/model.js');

const fs = require('fs');
const express = require('express');
const jsonParser = require('body-parser').json();
const router = express.Router();
let { google } = require('googleapis');

const readline = require('readline');

const SCOPES = [
  'https://www.googleapis.com/auth/calendar'
];
const TOKEN_PATH = '../credentials2.json';

router.post('/api/user', jsonParser, function (req, res, next) {
  console.log('in timelines route b4 new user adding req', req.body);
  new User(req.body).save()
    .then(data => {
      res.json(data);
    })
    .catch(next);
});

router.get('/api/user', function (req, res, next) {
  // currently setup for find all either change it to find one or add a find one route
  User.find({})
    .then(user => {
      console.log('data line 22', user);
      res.json(user);
    })
    .catch(next);
});

// router.put('/api/user', function (req, res, next) {
//   User.findOne


// });

router.delete('/api/user/:id', function (req, res, next) {
  console.log(req.params, 'req params 44');
  User.findByIdAndRemove(req.params)
    .catch(next);
});

module.exports = router;
