class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.length += 1;
      return this;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length += 1;
    return this;
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

  remove(position) {
    const length = this.length;
    const message = { failure: 'Failure: not-existent node in this list.' };
    let currentNode = this.head;
    let count = 0;
    let beforeNodeToDelete = null;
    let nodeToDelete = null;

    if (position < 0 || position > length) {
      throw new Error(message.failure);
    }

    if (position === 1) {
      this.head = currentNode.next;
      currentNode = null;
      this.length -= 1;
      return this;
    }

    while (count < position) {
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      count += 1;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    nodeToDelete = null;
    this.length -= 1;
    return this;
  }
}


const emptyList = new SinglyList();
const list1 = emptyList.add('Трататуськи!');
const list2 = list1.add('Трататусечки!');
const list3 = list2.add('Чирибим!');
const list4 = list3.add('Чирибом!');

console.log(list4.searchNodeAt(4)); // Node { data: 'Чирибом!', next: null }
list4.remove(3).add('Тратата!');
console.log(list4.searchNodeAt(4)); // Node { data: 'Тратата!', next: null }
