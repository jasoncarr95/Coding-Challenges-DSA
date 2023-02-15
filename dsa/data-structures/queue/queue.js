const Queue = function () {
  // implement your Queue constructor here
  this.items = [];
  //   this.size = 0;
};

Queue.prototype.enqueue = function (item) {
  // add item to the queue
  this.items.push(item);
};

Queue.prototype.dequeue = function () {
  // remove item from the front of the ⁄eddqueue and return its value
  return this.items.shift();
};

Queue.prototype.size = function () {
  // return number of items in queue so far
  return this.items.length;
};

// ~~~~~~~
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
console.log(queue);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue);
