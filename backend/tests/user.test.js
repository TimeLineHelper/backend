'use strict';

const superagent = require('superagent');
const User = require('../models/user.js');
const PORT = process.env.PORT || 3000;

require('jest');
const url = `http://localhost:${PORT}`;

let itemArray = { itemTitle: 'uuuuugggggg', description: 'striuuuuuggggggng', id: 123456789, timeStamp: 656 };

const exampleData = {
  email: 'blah@blah.com',
  begin: 12,
  end: 48,
  id: 123456789,
  taskTitle: 'blllleeeehhhhh',
  items: [itemArray],
};




<<<<<<< HEAD
describe('Info Routes', function(){
  describe('POST: /api/user/:userId/info', () => {
    let temp = '';
    beforeEach(done => {  
      superagent.post('http://localhost:3000/api/user')
      .send(exampleData)
      .then(data => {
        temp = data;
=======
describe('Info Routes', function () {
  // describe('POST: /api/user', () => {
  //   let temp = '';

  //   console.log('inside before each line 27');
  //   superagent.post('http://localhost:3000/api/user')

  //     .send(exampleData)
  //     .then(data => {
  //       temp = data;
  //       console.log('temp', temp.body);
  //       done();
  //     })
  //     .catch(done => {
  //       done();
  //     });

  it('email should match', done => {

    superagent.get(`${url}/api/user`)
      .then((err, res) => {
        console.log('this is the response', res);
        if (err) return done(err);
        expect(res.status).toEqual(200);
        //hardcoded email replace with var later
        expect(res.body.email).toEqual('blah@blah.com');
>>>>>>> 1871b020a13e2e556d705bc1a8fe7ac06da4cbc0
        done();


      })
      .catch(err => {
        return done(err);
      });
  });

  it('email should delete a user by id', done => {

    superagent.delete(`${url}/api/user/:5b286f0d96a91f4a550cac9c`)
      .then((err, res) => {
        console.log('this is the response', res);
        if (err) return done(err);
        expect(res.status).toEqual(204);
        done();


      })
      .catch(err => {
        return done(err);
      });
  });
});


// });