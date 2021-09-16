// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Create a function head which returns the first item in the array.
//The head function should not return the first element as an array. It should simply return the element itself.


const head = function(list) {
  if (list) {
    return list [0];
  } else {
    return "undefinded";
  }
};

//TEST CODE
assertEqual(head(), "undefinded");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");