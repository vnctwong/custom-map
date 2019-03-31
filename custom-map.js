/* Function will take in two arguments.
The first will be an array to map,
and the second will be a callback function.
The function will return a new array based on
the results of the callback function. */

var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback) {
  var newArray = [];
  array.forEach(elem => {
    newArray.push(callback(elem));
  });

  return newArray;

}

console.log(map(words, function (word) {
  return word.length;
}));

console.log(map(words, function (word) {
  return word.toUpperCase();
}));

console.log(map(words, function (word) {
  return word.split('').reverse().join('');
}));

console.log(words);


/*
[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
*/