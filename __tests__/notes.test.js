const notes = require('./notes.js');
const jest = require('jest');

jest.spyOn(global.console, 'log');

describe('testing the note modules', () => {

  it('should fire the console log function', () => {

    // here is the real js test
    Note({ a: 'Hello Mom!' });
    expect(console.log).toHaveBeenCalled();
  });
});