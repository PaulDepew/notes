'use strict';

//dependencies

const minimist = require('minimist');





// This is a function to get the arguments off of the terminal input
function Input() {
  const args = process.argv.slice(2);
  this.payload = this.getNote(args[1]);
  this.action = this.getAction(args[0]);
  
}


Input.prototype.getAction = function (action) {
  let methods = ['--add', '-a'];

  if (methods.includes(action.toLowerCase())){
    return action.toLowerCase();
  } else {
    return false;
  }
};

Input.prototype.getNote = function (note = '') {
  if (note !== '') {
    return note.toUpperCase();
  } else {
    return 'There was an error with the note';
  }
};

module.exports = Input;