'use strict';

// node modules
const minimist = require('minimist');
require('dotenv').config();
const mongoose = require('mongoose');
const Input = require('./lib/input');
const Notes = require('./lib/notes');

// new instance of constructor function from input.js file
const userInput = new Input;
console.log(userInput);

if (userInput.validate(userInput) === true){

  // passes user input via above constructor to notes library
  const addNote = new Notes(userInput);
  addNote.execute(userInput);
  // addNote.add(userInput);

  console.log(addNote);
} else { console.log('ERROR! Please insert a proper command!');}

module.exports = userInput;