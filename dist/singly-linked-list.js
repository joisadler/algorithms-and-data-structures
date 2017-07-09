'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
  function Node(data) {
    _classCallCheck(this, Node);

    this.data = data;
    this.next = null;
  }

  _createClass(Node, [{
    key: 'toString',
    value: function toString() {
      if (!this.data) {
        return '';
      }
      return '' + this.data;
    }
  }]);

  return Node;
}();

var SinglyList = function () {
  function SinglyList() {
    _classCallCheck(this, SinglyList);

    this.length = 0;
    this.head = null;
  }

  _createClass(SinglyList, [{
    key: 'clone',
    value: function clone() {
      return _.cloneDeep(this);
    }
  }, {
    key: 'listLength',
    value: function listLength() {
      return this.length;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return !this.head;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var currentNode = this.head;
      var str = '';

      if (this.length === 1) {
        return '[ ' + currentNode.data + ' ]';
      }

      for (var i = 1; i < this.length; i += 1) {
        if (i === 1) {
          str += '' + currentNode.data;
          currentNode = currentNode.next;
        }
        str += ', ' + currentNode.data;
        currentNode = currentNode.next;
      }
      return '[ ' + str + ' ]';
    }
  }, {
    key: 'add',
    value: function add(value) {
      var clone = this.clone();
      var node = new Node(value);
      var currentNode = clone.head;

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
  }, {
    key: 'searchNodeAt',
    value: function searchNodeAt(position) {
      var length = this.length;
      var message = { failure: 'Failure: not-existent node in this list.' };
      var currentNode = this.head;
      var count = 1;

      if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
      }

      while (count < position) {
        currentNode = currentNode.next;
        count += 1;
      }
      return currentNode;
    }
  }, {
    key: 'reverse',
    value: function reverse() {
      var result = new SinglyList();
      for (var i = this.length; i > 0; i -= 1) {
        result = result.add(this.searchNodeAt(i).data);
      }
      return result;
    }
  }, {
    key: 'slice',
    value: function slice() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.length;

      var message = { failure: 'Failure: invalid parameter' };
      var newList = new SinglyList();

      if (this.length === 0) {
        return newList;
      }

      if (start <= 0 || stop > this.length || start > stop) {
        throw new Error(message.failure);
      }

      for (var i = start; i <= stop; i += 1) {
        newList = newList.add(this.searchNodeAt(i).data);
      }
      return newList;
    }
  }, {
    key: 'concat',
    value: function concat(list) {
      var result = this.clone();
      for (var i = 1; i <= list.length; i += 1) {
        result = result.add(list.searchNodeAt(i).data);
      }
      return result;
    }
  }, {
    key: 'addTo',
    value: function addTo(value, position) {
      var length = this.length;
      var newList = new SinglyList();
      var message = { failure: 'Failure: invalid parameter.' };

      if (position <= 0 || position > length) {
        throw new Error(message.failure);
      }

      if (position === 1) {
        return newList.add(value).concat(this);
      }

      var left = this.slice(1, position - 1);
      var right = this.slice(position, length);
      return left.add(value).concat(right);
    }
  }, {
    key: 'remove',
    value: function remove() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.length;

      var clone = this.clone();
      var message = { failure: 'Failure: not-existent node in this list.' };
      var length = clone.length;

      if (length === 0 || position < 0 || position > length) {
        throw new Error(message.failure);
      }
      if (position === 1) {
        return clone.slice(2, length);
      }
      if (position === length) {
        return clone.slice(1, length - 1);
      }

      var left = clone.slice(1, position - 1);
      var right = clone.slice(position + 1, length);
      return left.concat(right);
    }
  }, {
    key: 'hasCycle',
    value: function hasCycle() {
      var clone = this.clone();
      var currentNode = clone.head;
      for (var i = 1; i < clone.length; i += 1) {
        currentNode = currentNode.next;
      }

      if (!currentNode.next) {
        return false;
      }
      return true;
    }
  }]);

  return SinglyList;
}();

var isList = function isList(object) {
  return Object.prototype.hasOwnProperty.call(object, 'length') && Object.prototype.hasOwnProperty.call(object, 'head');
};

var isNode = function isNode(object) {
  return Object.prototype.hasOwnProperty.call(object, 'data') && Object.prototype.hasOwnProperty.call(object, 'next');
};

var cycledListToStr = function cycledListToStr(list) {
  var result = '';
  var currentNode = list.head;
  for (var i = 1; i <= list.length * 2; i += 1) {
    if (i === 1) {
      result += '' + currentNode.data;
      currentNode = currentNode.next;
    }
    if (i === list.length * 2) {
      result += ', ' + currentNode.data + '...';
      currentNode = currentNode.next;
    } else {
      result += ', ' + currentNode.data;
      currentNode = currentNode.next;
    }
  }
  return '[ ' + result + ' ]';
};

var emptyList = new SinglyList();
var list1 = emptyList.add('Трататуськи!').add('Трататусечки!').add('Чирибим!').add('Чирибом!').remove(4).add('Парам-пам-пам!');
var list2 = emptyList.add('Трам-пам-пам!').add('Опа!');
var cycledList = list1.clone();
cycledList.searchNodeAt(4).next = cycledList.searchNodeAt(1);

console.log(list1.toString()); // [ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам! ]
console.log(list1.clone().toString()); // [ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам! ]
console.log(list1.searchNodeAt(2).toString()); // Трататусечки!
console.log(list1.slice(2, 3).toString()); // [ Трататусечки!, Чирибим! ]
console.log(isList(list1)); // true
console.log(isNode(list1.searchNodeAt(4))); // true
console.log(list1.isEmpty()); // false
console.log(list1.listLength()); // 4
console.log(list1.reverse().toString()); // [ Парам-пам-пам!, Чирибим!, Трататусечки!, Трататуськи! ]
console.log(list1.concat(list2).toString()); // [ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам!, Трам-пам-пам!, Опа! ]
console.log(list1.addTo('Трам-пам-пам!', 4).toString()); // [ Трататуськи!, Трататусечки!, Чирибим!, Трам-пам-пам!, Парам-пам-пам! ]
console.log(cycledListToStr(cycledList)); // [ Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам!, Трататуськи!, Трататусечки!, Чирибим!, Парам-пам-пам!, Трататуськи!... ]
console.log(cycledList.hasCycle()); // true
console.log(list1.hasCycle()); // false