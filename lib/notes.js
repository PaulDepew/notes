'use strict';

const Mongoose = require('./notes-schema');
const crud = require('./notes-collection');

class Notes {
  constructor(user) {
    this.action = user.action;
    this.note = user.payload;
    this.catName = user.category || 'General';
  }

  execute(){

    switch (this.action) {
    case  'a':
    case 'add':
      this.add();
      break;
    case  'delete': 
    case 'd':
      this.delete();
      break;
    case 'list': 
    case 'l':
      this.list();
      break;
    default: console.log('try again :(');
    } 
  }
  // this adds a new note to the MongoDB
  add(){
    console.log('adding note: ' + this.note);
    crud.create(this);
  }

  // This deletes a MongoDB entry based on ID
  delete(){
    console.log('Deleted!');
    crud.remove(this);
  }

  // This finds notes based on the list parameters given
  list(){
    console.log('Getting your list!');
    crud.get(this);
  }
}

module.exports = Notes;
