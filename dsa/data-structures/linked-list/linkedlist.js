// Doubly Linked List

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null; // if prev is not passed in, set it to null
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
