// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    console.log(letter);
    if (results[letter]) {
      results[letter] = results[letter] + 1;
    } else if (letter !== " ") {
      results[letter] = 1;
    }
  } return results;
};

let output = countLetters("Lighhouse in the house");
console.log(output);
