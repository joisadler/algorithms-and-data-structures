import * as _ from 'lodash';

class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }

  toString() {
    if (!this.data) {
      return '';
    }
    return `${this.data}`;
  }
}

class DoublyList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  clone() {
    return _.cloneDeep(this);
  }

  listLength() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  toString() {
    let currentNode = this.head;
    let str = '';

    if (this.length === 1) {
      return `[ ${currentNode.data} ]`;
    }

    for (let i = 1; i < this.length; i += 1) {
      if (i === 1) {
        str += `${currentNode.data}`;
        currentNode = currentNode.next;
      }
      str += `, ${currentNode.data}`;
      currentNode = currentNode.next;
    }
    return `[ ${str} ]`;
  }

  add(value) {
    const clone = this.clone();
    const node = new Node(value);

    if (clone.length) {
      clone.tail.next = node;
      node.previous = clone.tail;
      clone.tail = node;
    } else {
      clone.head = node;
      clone.tail = node;
    }
    clone.length += 1;
    return clone;
  }

  searchNodeAt(position) {
    const length = this.length;
    const message = { failure: 'Failure: not-existent node in this list.' };
    let currentNode = this.head;
    let count = 1;

    if (length === 0 || position < 1 || position > length) {
      throw new Error(message.failure);
    }

    while (count < position) {
      currentNode = currentNode.next;
      count += 1;
    }
    return currentNode;
  }

  reverse() {
    let result = new DoublyList();
    for (let i = this.length; i > 0; i -= 1) {
      result = result.add(this.searchNodeAt(i).data);
    }
    return result;
  }

  slice(start = 1, stop = this.length) {
    const message = { failure: 'Failure: invalid parameter' };
    let newList = new DoublyList();

    if (this.length === 0) {
      return newList;
    }

    if (start <= 0 || stop > this.length || start > stop) {
      throw new Error(message.failure);
    }

    for (let i = start; i <= stop; i += 1) {
      newList = newList.add(this.searchNodeAt(i).data);
    }
    return newList;
  }

  concat(list) {
    let result = this.clone();
    for (let i = 1; i <= list.length; i += 1) {
      result = result.add(list.searchNodeAt(i).data);
    }
    return result;
  }

  addTo(value, position) {
    const length = this.length;
    const newList = new DoublyList();
    const message = { failure: 'Failure: invalid parameter.' };

    if (position <= 0 || position > length) {
      throw new Error(message.failure);
    }

    if (position === 1) {
      return newList.add(value).concat(this);
    }

    const left = this.slice(1, position - 1);
    const right = this.slice(position, length);
    return left.add(value).concat(right);
  }

  remove(position = this.length) {
    const clone = this.clone();
    const message = { failure: 'Failure: not-existent node in this list.' };
    const length = clone.length;

    if (length === 0 || position < 0 || position > length) {
      throw new Error(message.failure);
    }
    if (position === 1) {
      return clone.slice(2, length);
    }
    if (position === length) {
      return clone.slice(1, length - 1);
    }

    const left = clone.slice(1, position - 1);
    const right = clone.slice(position + 1, length);
    return left.concat(right);
  }

  hasCycle() {
    const clone = this.clone();
    let currentNode = clone.head;
    for (let i = 1; i < clone.length; i += 1) {
      currentNode = currentNode.next;
    }

    if (!currentNode.next) {
      return false;
    }
    return true;
  }
}

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

export { DoublyList, isList, isNode, cycledListToStr };
