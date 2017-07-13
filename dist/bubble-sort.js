"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (array) {
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