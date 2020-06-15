'use strict';

const supergoose = require('cf-supergoose');
const Controller = require('../lib/notes-collection.js');


beforeAll(() => {
  supergoose.startDB();
});

afterAll(() => {
  supergoose.stopDB();
});

describe('test a mongo request class', () => {
  it('should contain a response', (done) => {

   
    Controller.create({note: 'Hello Mom', category: 'General'})
      .then(response => {
        expect(response).toBeTruthy();
        done();
      });

  });
});