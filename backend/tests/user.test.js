'use strict';

const superagent = require('superagent');
const User = require('../models/user.js');
const PORT = process.env.PORT || 3000;

require('jest');
const url = `http://localhost:${PORT}`;

let itemArray = new Schema({ itemTitle: 'uuuuugggggg', description: 'striuuuuuggggggng'});

const exampleData = {
  email: 'bleh@bleh',   
  begin: new Date(),
  end: new Date(),
  taskTitle : 'blllleeeehhhhh',
  items: [itemArray],
};




describe('Info Routes', function(){
  describe('POST: /api/user/:userId/info', () => {
    let temp = '';
    beforeEach(done => {  
      superagent.post('http://localhost:3000/api/user')
      .send(exampleData)
      .then(data => {
        temp = data;
        done();
      })
      .catch(done => {
        done();
      });
    });
    it('exampleData length should equal one', done => {
    
      superagent.post(`${url}/api/senshi/${temp.body._id}/info`)
      .send(exampleData)
      .then((res) => {
        expect(res.body.exampleData.length).toEqual(1);
        done();
      })
      .catch( err =>{
        return done(err);
      });
    });
  });
});