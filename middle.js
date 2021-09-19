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

middle([1, 2, 3, 4]);// => [2, 3]
middle([1, 2, 3, 4, 5, 6]);// => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]) ,[2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);