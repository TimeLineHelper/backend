'use strict';

const Timeline = require('../models/model.js');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/timelinehelper');

var data = [{
  startDate: 'June 1, 2018',
  task: 'Learn to swim',
  endDate: 'June 30, 2018',
},
{
  startDate: 'July 4, 2018',
  task: 'Train for Marathon',
  endDate: 'August 15, 2018',
}];

var seedTimeline = function() {
  data.forEach(element => {
    let newTimeline = new Timeline(element);
    newTimeline.save();
    console.log('newTimeLine: ', newTimeline);
  });
};

console.log('date: ', data);

seedTimeline();

module.exports = { Timeline };