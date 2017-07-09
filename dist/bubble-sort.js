"use strict";

module.exports = function (array) {
  var result = array.slice();
  var swap = false;

  for (var i = 1; i < result.length - 2; i += 1) {
    for (var j = 0; j <= result.length - i; j += 1) {
      if (result[j] > result[j + 1]) {
        var temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
        swap = true;
      }
    }
    if (swap === false) {
      return result;
    }
  }
  return result;
};

//console.log(bubbleSort([5, 1, 4, 2, 8])); // [ 1, 2, 4, 5, 8 ]
//console.log(bubbleSort([45, 0, 4.5, 77, 2, 0, 838, 7])); // [ 0, 0, 2, 4.5, 7, 45, 77, 838 ]
//console.log(bubbleSort([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
//console.log(bubbleSort(['a', 'b', 'd', 'c', 'f', 'g', 'e', 'z'])); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'z' ]