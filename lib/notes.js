'use strict';

/**
 * This is a function.
 *
 * @param options - an Object from index.js
 * @return new Note - A note object with 
 */

function Note(options) {
  this.action = options.action;
  this.note = options.payload;
  this.id = Math.ceil(Math.random()*1000);
}


Note.prototype.execute = function (options) {

  let actions = ['-add', '-a'];
  if (actions.includes(options.action.toLowerCase())) {
    return new Note.add(options);
  } else {
    return 'Sorry there was an error';
  }
};

Note.prototype.add = function (options) {
  console.log(options.note);
};

module.exports = Note;