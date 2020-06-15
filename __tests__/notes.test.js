const notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('testing the note modules', () => {

  it('should fire the console log function', () => {

    // here is the real js test
   let newNote = new notes({ action: 'add ', payload: 'Hello', catName:'General' });
    expect(newNote).toEqual({ action: 'add ', note: 'Hello', catName:'General' });
  });
});