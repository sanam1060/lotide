
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log( `❌❌❌ Assertion Failed ${actual} !== ${expected}`);
  }
};



// FUNCTION IMPLEMENTATION
const eqObjects = function(actual, expected) {
  const inspect = require('util').inspect;
  const object1 = inspect(actual);
  const object2 = inspect(expected);
  console.log(object1,object2);
  if (object1.length === object2.length) {
    for (let i = 0; i < object1.length; i++) {
      if (object1[i] !== object2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};

console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));