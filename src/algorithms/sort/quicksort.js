const qsort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const copy = arr.slice();
  const pivot = copy[0];
  const rest = copy.splice(0, 1);
  const less = copy.filter(item => item < pivot, rest);
  const greaterOrEqual = copy.filter(item => item >= pivot, rest);
  return [].concat(qsort(less), pivot, qsort(greaterOrEqual));
};

export default qsort;
