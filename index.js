'use strict';

// Node Module libraries
const Input = require('./lib/add');
const fetch = require('./lib/fetch');


const options = new Input();

fetch(options);