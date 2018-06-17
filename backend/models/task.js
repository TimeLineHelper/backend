'use strict';
const mongoose = require('mongoose');
const tasks = require('./task.js');
const Schema = mongoose.Schema;

const TimelineSchema = new mongoose.Schema({
  begin: new Date(),
  name : String,
  items: String,
 // items will be subdoc look up TODO//
});

module.exports = mongoose.model('Timeline', TimelineSchema);