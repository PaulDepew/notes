'use strict';

const mongoose = require('mongoose');

class Notes {
  constructor(user) {
    this.action = user.action;
    this.payload = user.payload;
    this.category = user.category;
    this.id = Math.floor(Math.random()*1000);
  }

  execute(){

    switch (this.action) {
    case  'a':
      this.add();
      console.log('added');
      break;
    case 'add':
      this.add();
      break;
    case  'delete': 
      this.delete();
      break;
    case 'list': 
      console.log('Lists of things');
      break;
    case 'categories': 
      console.log('Categories of things');
      break;
    default: console.log('try again :(');
    } 
  }
  add(){
    //adds note
    // let note = new Notes();
    console.log('adding note: ' + this.payload);
  }
  delete(){
    console.log('Deleted!');
  }
  list(){
    console.log('list it all!');
  }
}

// function Notes(userInput) {

//   this.action = userInput.action;
//   this.payload = userInput.payload;
//   this.id = Math.floor(Math.random()*1000);

// }

// Notes.prototype.execute = function(){
//   const actions = ['add', 'a'];
//   switch (actions.includes(this.action)){
//   case 'add' || 'a':
//     Notes.add;
//     break;
//   }
// };

// Notes.prototype.add = function(){
//   //adds note
//   let note = new Notes(this.action, this.payload);
//   console.log('adding note: ' + this.payload);
//   return note;
// };

module.exports = Notes;

// console.log(new Notes('add', 'this is a note test'));