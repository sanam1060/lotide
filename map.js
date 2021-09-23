const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

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

assertArraysEqual(map(["ground", "control", "to", "major", "tom"],word => word[0]),["g","c","t","m","t"]);

