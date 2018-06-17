'use strict';
const fs = require('fs');
const express = require('express');
const jsonParser = require('body-parser').json();
const router = express.Router();
let { google } = require('googleapis');
const User = require('../models/User.js');

const readline = require('readline');
const SCOPES = [
  'https://www.googleapis.com/auth/calendar'
];
const TOKEN_PATH = './timeline.js';

router.post('/api/user', jsonParser, function (req, res, next){
  new User(req.body).save()
  .then( data => {
    res.json(data);
  })
  .catch(next);
});




module.exports = router;
