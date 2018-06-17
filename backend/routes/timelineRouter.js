'use strict';
const express = require('express');
const router = express.Router();

const Timeline = require('../models/model.js');

router.get('/', (req, res) => {
  console.log('hitting router');
});

module.exports = router;