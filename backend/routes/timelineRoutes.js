'use strict';
const express = require('express');
const router = express.Router();
const Timeline = require('../models/model.js');



router.get('/', (req, res) => {
  console.log('route');
});
module.exports = router;
