'use strict';
const express = require('express');
const router = express.Router();
const Timeline = require('../models/model.js');



router.get('/getcaldata', (req,res) => {
  console.log('route was hit');
  res.send('woooooo');
});
module.exports = router;
