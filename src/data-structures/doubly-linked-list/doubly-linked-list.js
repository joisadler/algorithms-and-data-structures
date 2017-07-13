const isList = object =>
  Object.prototype.hasOwnProperty.call(object, 'length') &&
  Object.prototype.hasOwnProperty.call(object, 'head') &&
  Object.prototype.hasOwnProperty.call(object, 'tail');

const isNode = object =>
  Object.prototype.hasOwnProperty.call(object, 'data') &&
  Object.prototype.hasOwnProperty.call(object, 'previous') &&
  Object.prototype.hasOwnProperty.call(object, 'next');

const cycledListToStr = (list) => {
  let result = '';
  let currentNode = list.head;
  for (let i = 1; i <= list.length * 2; i += 1) {
    if (i === 1) {
      result += `${currentNode.data}`;
      currentNode = currentNode.next;
    }
    if (i === list.length * 2) {
      result += `, ${currentNode.data}...`;
      currentNode = currentNode.next;
    } else {
      result += `, ${currentNode.data}`;
      currentNode = currentNode.next;
    }
  }
  return `[ ${result} ]`;
};

export { isList, isNode, cycledListToStr };
