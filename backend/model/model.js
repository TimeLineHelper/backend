'use strict';

const mongoose = require('mongoose');

const TimelineSchema = new mongoose.Schema({
  originalId: Number,
  duration: Number,
  event: String,
  info: String,
});

module.exports = mongoose.model('Timeline', TimelineSchema);