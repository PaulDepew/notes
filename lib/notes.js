'use strict';

function Notes(input) {

  this.action = input.action;
  this.payload = input.payload;
  this.id = Math.floor(Math.random()*1000);

}

Notes.prototype.execute = function(){
  const actions = ['add', 'a'];
  switch (actions.includes(this.action)){
  case 'add' || 'a':
    Notes.add;
    break;
  }
};

Notes.prototype.add = function(){
  //adds note
  let note = new Notes(this.action, this.payload);
  console.log('adding note: ' + this.payload);
  return note;
};

module.exports = Notes;

// console.log(new Notes('add', 'this is a note test'));