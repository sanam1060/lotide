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

assertArraysEqual([1, 2], [1, 2]);