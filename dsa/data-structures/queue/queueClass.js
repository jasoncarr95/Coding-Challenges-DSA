class Queue {
  // constructor initializes the queue
  constructor() {
    this.storage = {};
    this.head = 0; // first element in queue
    this.tail = 0; // last element in queue
  }
  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }

  // size() {}
}

const toDoList = new Queue();

toDoList.enqueue("anki");
toDoList.enqueue("code challenge");
toDoList.enqueue("BANKI");

console.log(toDoList);
// Queue {
//   storage: { '0': 'anki', '1': 'code challenge', '2': 'BANKI' },
//   head: 0,
//   tail: 3
// }

console.log(toDoList.dequeue()); // anki
console.log(toDoList);
// Queue {
//   storage: { '1': 'code challenge', '2': 'BANKI' },
//   head: 1,
//   tail: 3
// }

console.log(toDoList.dequeue());
console.log(toDoList);
