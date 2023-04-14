class Queue<T> {
  private head: QueueNode<T> | null;
  private tail: QueueNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value: T): void {
    const newNode = new QueueNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue(): T | null {
    if (!this.head) {
      return null;
    }

    const dequeuedNode = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.length--;

    return dequeuedNode.value;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}

class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

const toDoList = new Queue();

toDoList.enqueue("anki");
toDoList.enqueue("code challenge");
toDoList.enqueue("BANKI");

console.log(toDoList);
