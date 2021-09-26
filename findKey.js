const findKey = function(object, callback) {
  let result = [];
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      result.push(key);
    }
  } return result;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));