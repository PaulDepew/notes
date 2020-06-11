'use strict';

const Mongoose = require('./notes-schema');

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
    let newNote = new Mongoose({note: this.payload, category: this.catName});

    newNote.save()
      .then(results => console.log('saved! ', results))
      .catch(err => console.log('Could not save!'));
  }

  // This deletes a MongoDB entry based on ID
  delete(){
    console.log('Deleted!');
    Mongoose.findByIdAndDelete(this.payload)
      .then(() => console.log('Deleted Succesfully'))
      .catch(() => console.log('could not delete'));
  }

  // This finds notes based on the list parameters given
  list(){
    console.log('Getting your list!');
    Mongoose.find({category: this.catName})
      .then( results => console.log(`All of your notes from ${this.note}  `, results))
      .catch(err => console.log(`Couldn't retrieve your notes :(`));


  }
}

module.exports = Notes;
