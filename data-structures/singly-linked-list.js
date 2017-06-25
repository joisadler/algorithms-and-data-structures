class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  toString() {
    if (!this.data) {
      return '';
    }
    return `${this.data}`;
  }

  clone() {
    return Object.assign(new Node(), this);
  }
}

class SinglyList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  listLength() {
    return this.length;
  }

  add(value) {
    const clone = this.clone();
    const node = new Node(value);
    let currentNode = clone.head;

    if (!currentNode) {
      clone.head = node;
      clone.length += 1;
      return clone;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    clone.length += 1;
    return clone;
  }

  concat(list) {
    let result = this.clone();
    for (let i = 1; i <= list.length; i += 1) {
      result = result.add(list.searchNodeAt(i).data);
    }
    return result;
  }

  addTo(value, position) {
    const clone = this.clone();
    const message = { failure: 'Failure: invalid parameter.' };
    const length = clone.length;
    let result = new SinglyList();

    if (position <= 0 || position > length) {
      throw new Error(message.failure);
    }

    if (position === 1) {
      result = result.add(value);
      for (let i = 0; i < length; i += 1) {
        result = result.add(clone.head.data);
        clone.head = clone.head.next;
      }
      return result;
    }

    const left = clone.slice(1, position - 1);
    const right = clone.slice(position, length);
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

  clone() {
    return Object.assign(new SinglyList(), this);
  }

  isEmpty() {
    return !this.head;
  }

  reverse() {
    let result = new SinglyList();
    for (let i = this.length; i > 0; i -= 1) {
      result = result.add(this.searchNodeAt(i).data);
    }
    return result;
  }

  toString() {
    let currentNode = this.head;
    let str = '';

    if (this.length === 1) {
      return `${currentNode.data}`;
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

  slice(start = 1, stop = this.length) {
    const message = { failure: 'Failure: invalid parameter' };
    let newList = new SinglyList();

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
}

const isList = object =>
  Object.prototype.hasOwnProperty.call(object, 'length') &&
  Object.prototype.hasOwnProperty.call(object, 'head');

const isNode = object =>
  Object.prototype.hasOwnProperty.call(object, 'data') &&
  Object.prototype.hasOwnProperty.call(object, 'next');

const emptyList = new SinglyList();
const list1 = emptyList
  .add('Трататуськи!')
  .add('Трататусечки!')
  .add('Чирибим!')
  .add('Чирибом!')
  .remove(4)
  .add('Парам-пам-пам!');
const list2 = emptyList
  .add('Трам-пам-пам')
  .add('Опа!');

console.log(list1.toString()); // [ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам! ]
console.log(list1.clone().toString()); // [ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам! ]
console.log(list1.searchNodeAt(2).toString()); // Трататусечки!
console.log(list1.slice(2, 3).toString()); // [ Трататусечки!, Чирибим! ]
console.log(isList(list1)); // true
console.log(isNode(list1.searchNodeAt(4))); // true
console.log(list1.isEmpty()); // false
console.log(list1.listLength()); // 4
console.log(list1.reverse().toString());// [ Парам-пам-пам!, Чирибим!, Трататусечки!, Трататуськи! ]
console.log(list1.concat(list2).toString()); // [ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам!, Трам-пам-пам, Опа! ]
console.log(list1.addTo('Трам-пам-пам!', 4).toString()); // [ Трататуськи!, Трататусечки!, Чирибим!, Трам-пам-пам!, Парам-пам-пам! ]
