// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [4, 5] for [3, 4, 5]", () => {
    assert.deepEqual(tail([3, 4, 5]) ,[4, 5]);
  });
});