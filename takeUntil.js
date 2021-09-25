const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const takeUntil = function(array, callback) {
  let finalResults = [];
  for (let item of array) {
    if (callback(item) !== true) {
      finalResults.push((item));
    } else {
      return finalResults;
    }
  }
};


const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

console.log(results1);
console.log('---');
console.log(results2);