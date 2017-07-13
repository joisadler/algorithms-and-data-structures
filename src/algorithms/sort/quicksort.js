export default (arr) => {
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
