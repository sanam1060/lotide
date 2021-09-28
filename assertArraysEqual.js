const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let output = eqArrays(arr1 , arr2);
  if (output === true) {
    console.log("✅✅✅ Passed!");
  } else {
    console.log("❌❌❌ Failed!");
  }
};

assertArraysEqual([1, 2], [1, 2]);

module.exports = assertArraysEqual;