const assertEqual = require('./assertEqual');
//Create a function head which returns the first item in the array.
//The head function should not return the first element as an array. It should simply return the element itself.


const head = function(list) {
  if (list) {
    return list [0];
  } else {
    return "undefinded";
  }
};

module.exports = head;