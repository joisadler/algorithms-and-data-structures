module.exports = (arr) => {
  const sort = (list) => {
    if (list.length <= 1) {
      return list;
    }
    const pivot = list[0];
    const rest = list.splice(0, 1);
    const less = list.slice().filter(item => item < pivot, rest);
    const greaterOrEqual = list.slice().filter(item => item >= pivot, rest);
    return [].concat(sort(less), pivot, sort(greaterOrEqual));
  };
  return sort(arr);
};

//console.log(quicksort([5, 1, 4, 2, 8])); // [ 1, 2, 4, 5, 8 ]
//console.log(quicksort([45, 0, 4.5, 77, 0, 2, 838, 7, 0])); // [0, 0, 0, 2, 4.5, 7, 45, 77, 838 ]
//console.log(quicksort([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
//console.log(quicksort(['a', 'b', 'd', 'c', 'f', 'g', 'e', 'z'])); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'z' ]
