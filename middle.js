const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  let newArr = [];
  let middleElements = arr.length / 2;
  if (arr.length <= 2) {
    return newArr;
  } else if (arr.length % 2 === 0) {
    let middleOne = arr[middleElements - 1];
    let middleTwo = arr[middleElements];
    newArr.push(middleOne);
    newArr.push(middleTwo);
    return newArr;
  } else {
    middleElements = (arr.length - 1) / 2;
    newArr.push(arr[middleElements]);
    return newArr;
  }
};

module.exports = middle;