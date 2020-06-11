'use strict';

jest.mock(minimist);
const minimist = require('minimist');
minimist.mockImplementation( () => {
  return {
    a: 'hello world',
  };
});

const Input = require('../lib/input');

describe('Testing the input.js module to verify user input is successfully being received', () => {
  it('should return an action/method and a payload/message', () => {
    let options = new Input();
    expect();
  });
});
