const stack = [];
stack.push(2); // stack is now [2]
stack.push(5); // stack is now [2,5]
let i = stack.pop(); // stack is now [2]
console.log(`i = ${i}`); // 5
console.log(`stack = ${stack}`); // [2]
