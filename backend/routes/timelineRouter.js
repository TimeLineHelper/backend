'use strict';

const superagent = require('superagent');
const User = require('../models/user.js');
// const Timeline = require('../models/model.js');

const fs = require('fs');
const express = require('express');
const jsonParser = require('body-parser').json();
const router = express.Router();
// let { google } = require('googleapis');

// const readline = require('readline');

// const SCOPES = [
//   'https://www.googleapis.com/auth/calendar'
// ];
// const TOKEN_PATH = '../credentials2.json';

router.post('/api/user', jsonParser, function (req, res, next) {
  // console.log('in timelines route b4 new user adding req', req.body);
  new User(req.body).save()
    .then(data => {
      res.json(data);
    })
    .catch(next);
});

router.get('/api/users', function (req, res, next) {
  // currently setup for find all either change it to find one or add a find one route
  console.log('31 get all');
  User.find({})
    .then(users => {
      // console.log('data line 22', users);
      res.json(users);
    })
    .catch(next);
});

router.get('/api/user/:email', function (req, res) {
  console.log(req.params.email, ' 40 req params');
  // currently setup for find all either change it to find one or add a find one route
  User.findOne({ email: req.params.email })
    .then((user, err) => {
      console.log(req.params.email, ' 40 req params after find one get');
      console.log('45 user after find one get', user);
      if (!user || !Object.keys(user).length) {
        // console.log('data line 47', user);
        // console.log('data line 47', err);
        res.status(404).send('user not found');
      } else {
        // console.log('data line 51', err);
        // console.log('data line 52', user);
        res.json(user);
      }
    });
  // User.findOne({ email: req.params.email })
  //   .then(user => {
  //     // console.log('data line 22', user);
  //     res.json(user);
  //   })
});


// router.put('/api/user/:email', jsonParser, function (req, res, next) {
//   User.findByOneAndUpdate(req.params.email, req.body, { new: true })
//     .then(user => res.json(user))
//     .catch(err => {
//       console.log(err, 'err line 51');
//     });



// });

router.put('/api/user/:email', jsonParser, (req, res) => {
  User.findOne({

    email: req.params.email
  })

    .then((user) => {
      // console.log(req.body, 'this is req.body 54');
      // console.log(req.body.tasks, 'this is req.body 54');
      // console.log(req.body.user, 'this is req.body 54');
      // if (req.body.tasks) {
      //   user.tasks = req.body.tasks;
      // }
      user = req.body;
      console.log(user, 'what is the motherfucking user');
      user.save();
    })
    .then((res) => {
      console.log('user updated right here!!!!', res.body);
      res.status(200).json(user);
    })
    .catch((err) => {
      console.log('is there a user in here?', err);
      res.status(400).send('unable to update');
    });
});

// router.delete('/api/user/:id', function (req, res, next) {
//   console.log(req.params.id, 'req params 44');
//   User.findOneAndRemove({ _id: req.params.id })
//     .then(data => {
//       console.log(data, 'data removed line 48');
//     })
//     .catch(err => {
//       console.log(err, 'err line 51');
//     });
// });

// yo actually make a var that holds the value for email from the users model pass it through the url so the db can identify it and remove it thanks - love past ix.... :3

router.delete('/api/user/:email', function (req, res, next) {
  // console.log(req.params, 'req params 44');
  User.findOneAndRemove({ email: req.params.email })
    .then(data => {
      res.send(204, 'user deleted');
      // console.log(data, 'data removed line 48');
    })
    .catch(err => {
      // console.log(err, 'err line 51');
    });
});







module.exports = router;
