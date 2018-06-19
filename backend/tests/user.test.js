'use strict';

const superagent = require('superagent');
const User = require('../models/user.js');
const PORT = process.env.PORT || 3000;

require('jest');
const url = `http://localhost:${PORT}`;

let itemArray = { itemTitle: 'uuuuugggggg', description: 'striuuuuuggggggng', id: 123456789, timeStamp: 656 };

const exampleData = {
  email: 'hskrwres@gmail.com',
  begin: 12,
  end: 48,
  id: 123456789,
  taskTitle: 'blllleeeehhhhh',
  items: [itemArray],
};




describe('Info Routes', function () {
  describe('POST: /api/user', () => {
    let temp = '';

    console.log('inside before each line 27');
    superagent.post('http://localhost:3000/api/user')

      .send(exampleData)
      .then(data => {
        temp = data;
        console.log('temp', temp.body);
        done();
      })
      .catch(done => {
        done();
      });

    it('exampleData length should equal one', done => {

      superagent.get(`${url}/api/user`)
        .then((err, res) => {
          console.log('this is the response', res);
          if (err) return done(err);
          expect(res.status).toEqual(200);
          expect(res.body.email).toEqual('bleh@bleh');
          done();


        })
        .catch(err => {
          return done(err);
        });
    });
  });
});