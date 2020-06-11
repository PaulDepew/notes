'use strict';

require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('open', () => {
  console.log('connected to mongo');
});

const requestSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: false },
});