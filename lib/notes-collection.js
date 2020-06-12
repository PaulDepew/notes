'use strict';

const schema = require('./notes-schema');

function create(input) {
  let newNote = new schema({
    note: input.payload,
    category: input.catName
  });
  newNote.save()
    .then(results => console.log('saved! ', results))
    .catch(err => console.log('Could not save!'));
}

function get(input) {
  schema.find({
    category: input.note,
  })
    .then(results => console.log(`All of your notes from ${input.note}  `, results))
    .catch(err => console.log(`Couldn't retrieve your notes :(`));
}


// Delete is a reserved word, cannot use it for function
function remove(input) {
  schema.findByIdAndDelete(input.payload)
    .then(() => console.log('Deleted Succesfully'))
    .catch(() => console.log('could not delete'));
}

module.exports = {
  get,
  create,
  remove,
};