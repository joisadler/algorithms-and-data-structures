"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arr) {
  var sort = function sort(list) {
    if (list.length <= 1) {
      return list;
    }
    var pivot = list[0];
    var rest = list.splice(0, 1);
    var less = list.slice().filter(function (item) {
      return item < pivot;
    }, rest);
    var greaterOrEqual = list.slice().filter(function (item) {
      return item >= pivot;
    }, rest);
    return [].concat(sort(less), pivot, sort(greaterOrEqual));
  };
  return sort(arr);
};