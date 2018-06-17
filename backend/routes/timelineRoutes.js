'use strict';
const fs = require('fs');
const express = require('express');
const router = express.Router();
let { google } = require('googleapis');

const readline = require('readline');
const SCOPES = [
  'https://www.googleapis.com/auth/calendar'
];
const TOKEN_PATH = './timeline.js';



module.exports = router;
