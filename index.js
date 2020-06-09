'use strict';

/**
 * This is a function.
 *
 * @param options - Entered from the Command line Arguments
 * @return options - An Input Object
 */

// Node Module libraries
const Input = require('./lib/input');
const Note = require('./lib/notes');




const options = new Input();
// console.log(options);


function fetch(options) {
  if (options.action === false) {
    console.log('There was an error with your method! Please try again');
  } else {
    console.log(`Adding Note:  ${options.payload}`);
  }
}
fetch(options);

let note = new Note(options);

console.log(note);