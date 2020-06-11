
'use strict';

// dependencies required to parse user input
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
let method = (Object.keys(args).slice(1));
let message = (Object.values(args).slice(1));

// ES6 class that recieves and parses input from user

class Input {

  constructor() {
    this.action = method[0].toString();
    this.payload = message[0].toString();
    this.category = args.category;
  }

  // adds validation to insure that user input is valid
  validate(){
    let validOperator = false;
    let string = false;

    const operators = ['a', 'add', 'delete', 'list', 'categories'];
    if (operators.includes(this.action)) validOperator = true;

    const str = '';
    if (this.payload !== str) string = true;

    return validOperator && string;
  }

}

module.exports = Input;

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