'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Input = require('../index');


mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('open', () => {
  console.log('connected to mongo');
});

const requestSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: false },
  id: {type: String, required: false},
});

// Creating things is a 2 step process

// 1 - instanciation in js for the mongoose model
const newRequest = new Request(Input);

// 2 - persistence on mongodb
newRequest.save()
  .then(results => console.log('logging save results', results))
  .catch(err => console.log(err));

// use find with and empty object to return all
Request.find({})
  .then(results => console.log('logging find results', results))
  .catch(err => console.log(err));
