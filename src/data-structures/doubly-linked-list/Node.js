export default class {
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
