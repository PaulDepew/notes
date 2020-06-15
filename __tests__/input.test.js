'use strict';
const Input = require('../lib/input');
const minimist = require('minimist');

jest.mock('minimist');
minimist.mockImplementation( () => {
  return {
    x: '',
    a: 'passed',
    payload: '',
  }
  ;
});


describe('Testing the input.js module to verify user input is successfully being received', () => {
  it('should return an action/method and a payload/message', () => {
    let options = new Input();
    console.log(options);
    expect(options.payload).toEqual('passed');
  });
});
