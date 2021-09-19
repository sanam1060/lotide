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



const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[[sentence[i]]]) {
        results[[sentence[i]]].push(i);
      } else {
        results[[sentence[i]]] = [];
        results[[sentence[i]]].push(i);
      }
    }
    
  }
  return results;
};

// let output = letterPositions("lighthouse labs");
// console.log(output);
assertArraysEqual(letterPositions("hello").e, [1]);