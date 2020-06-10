'use strict';

// dependencies required to parse user input
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
let method = (Object.keys(args).slice(1).toString());
let message = args.a;

// constructor function that recieves and parses input from user

class Input {
  constructor() {
    this.action = method;
    this.payload = message;
  }

  validate(message){
    let validOperator = false;
    let string = false;
  
    const operators = ['a', 'add'];
    if (operators.includes(method[0])) validOperator = true;
  
    const str = '';
    if (message !== str) string = true;
  
    return validOperator && string;
  }
}


// function Input() {
  

//   this.action = method;
//   this.payload = message;

// }

// Input.prototype.validate = function(message){
//   let validOperator = false;
//   let string = false;

//   const operators = ['a', 'add'];
//   if (operators.includes(method[0])) validOperator = true;

//   const str = '';
//   if (message !== str) string = true;

//   return validOperator && string;
// };

module.exports = Input;

// console.log(foo)
// console.log(Object.keys(args).slice(1).toString());
// console.log(new Input());