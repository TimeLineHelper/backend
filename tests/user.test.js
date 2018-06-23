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

const badData = {
  email: '',
  begin: 3,
  end: 2,
  id: 1,
  taskTitle: 'bad title',
  items: [itemArray],
};


// post actin like a fool causing other tests to break when ran with post look into this maybe.

describe('Info Routes', function () {
  it.skip('POST: /api/user', done => {
    let temp = '';

    console.log('inside before each line 27');
    superagent.post('http://localhost:3000/api/user')

      .send(exampleData)
      .then(data => {
        temp = data;
        console.log('temp', temp.body);
        done();
      })
      .catch(err => {
        done(err);
      });
  });
  /////////////////////////////////////////////////////////////
  describe('get route', function () {
    it.skip('get all users', done => {

      superagent.get(`${url}/api/users`)
        .then((res) => {
          console.log('this is the response get all', res.status);

        expect(res.status).toEqual(200);
        done();


      })
      .catch(err => {
        return done(err);
      });
  });
});
///////////////////////////////////////////////////////////////////
describe('get route', function () {
  it.skip('get one user', done => {

    superagent.get(`${url}/api/user/blah@blah.com`)
      .then((res) => {
        console.log('this is the response get one', res.status, res.body.email);

        expect(res.status).toEqual(200);
        expect(res.body.email).toEqual('blah@blah.com');
        done();


      })
      .catch(err => {
        console.log('74 err');
        return done(err);
      });
  });

  // it('returns 404 if no user', done => {

  //   superagent.get(`${url}/api/user/notblah@blah.com`)
  //     .then((res) => {
  //       console.log('83 res', res);
  //       expect(res.status).toEqual(404);

  //       done();


  //     });
  // });
});


describe('delete route', function () {
  it.skip('should delete a user by email', done => {

    superagent.delete(`${url}/api/user/blah@blah.com`)
      .then((res) => {
        console.log('this is the response', res.status);
        expect(res.status).toEqual(204);
        done();


      })
      .catch(err => {
        console.log(`${url}/api/user/blah@blah.com`);
        console.log('in test catch line 71 ');
        return done(err);
      });
  });
});

// update names based on the user.js model
describe('Update User information', () => {
  it.skip('User should be able to update information', (done) => {
    superagent.put(`${url}/api/user/blah@blah.com`)
      .send({
        email: 'blah@blah.com',
        newTaskTitle: 'maybe you aight',
      })
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      })
      .catch(err => {
        console.log(err.body, 'this is the error line 91');
      });
  });
});
//////////////////////////////////////

describe('Remove a task', () => {
  it.skip('User should be able remove a task', (done) => {
    superagent.put(`${url}/api/user/tasks/:email`)
      .send({
        email: 'enprocopios@gmail.com',
        tasksNew: 'm',
        taskOld:
      })
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      })
      .catch(err => {
        console.log(err.body, 'this is the error line 91');
      });
  });
});

