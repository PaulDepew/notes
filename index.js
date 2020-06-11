'use strict';

// node modules
require('dotenv').config();
const mongoose = require('mongoose');
const Input = require('./lib/input');
const Notes = require('./lib/notes');


mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const userInput = new Input;

const db = mongoose.connection;
db.on('error', () => {
  console.log('Database not connecting!');
});
db.on('open', () => {
  console.log('connected to Atlas');
  
  if (userInput.validate(userInput) === true){
  
    // passes user input via above constructor to notes library
    const noteAction = new Notes(userInput);
    noteAction.execute();
  
    // console.log(noteAction);
  } else { console.log('ERROR! Please use a proper command!');}
});




module.exports = userInput;