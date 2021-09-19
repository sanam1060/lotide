const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  let output = eqArrays(arr1 , arr2);
  if (output === true) {
    console.log("✅✅✅ Passed!");
  } else {
    console.log("❌❌❌ Failed!");
  }
};

const without = function(source, itemsToRemove) {
  let newArr = [];
  let add = true;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] ===  itemsToRemove[j]) {
        add = false;
      }
    }
    if (add === true) {
      newArr.push(source[i]);
    }
    add = true;

  } return newArr;
};

console.log(without([1, 2, 3], [1,2, 1]));
//TEST CODE
const words = ["hello", "world", "lighthouse"];
let output = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(output, ["hello", "world"]);