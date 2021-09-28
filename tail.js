const assertEqual = require('./assertEqual');
// // functional vs procedural
const tail = function(arr) {
  const newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

/*
An array with only one element should yield an empty array for its tail
An empty array should yield an empty array for its tail
*/

module.exports = tail;