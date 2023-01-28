import { fib, fibCache } from "./fibDynamic.js";

// console.time("Naive Fibonacci");
// const naiveResult = fib(40);
// console.timeEnd("Naive Fibonacci");

// console.time("Memoized Fibonacci");
// const memoizedResult = fibCache(40);
// console.timeEnd("Memoized Fibonacci");

// const startMem = process.memoryUsage();
// fib(40);
// const endMem = process.memoryUsage();
// console.log("Naive Fibonacci Heap Used:", endMem.heapUsed - startMem.heapUsed);

// const startMemo = process.memoryUsage();
// fibCache(40);
// const endMemo = process.memoryUsage();
// console.log(
//   "Memoized Fibonacci Heap Used:",
//   endMemo.heapUsed - startMemo.heapUsed
// );

// const start = performance.now();
// fib(40);
// const end = performance.now();
// console.log(`Time Elapsed: ${(end - start) / 1000} seconds.`);
// console.log(`Time Elapsed: ${end - start} milliseconds.`);

const start = performance.now();
const naiveResult = fib(40);
const end = performance.now();
const naiveTime = Number(end - start).toFixed(3);
console.log(`Naive Fibonacci took ${naiveTime} milliseconds.`);

const start2 = performance.now();
const memoizedResult = fibCache(40);
const end2 = performance.now();
const memoizedTime = Number(end2 - start2).toFixed(3);
console.log(`Memoized Fibonacci took ${memoizedTime} milliseconds.`);

const startMem = process.memoryUsage();
fib(40);
const endMem = process.memoryUsage();
const naiveMemory = endMem.heapUsed - startMem.heapUsed;

const startMemo = process.memoryUsage();
fibCache(40);
const endMemo = process.memoryUsage();
const memoizedMemory = endMemo.heapUsed - startMemo.heapUsed;

console.table([
  {
    Algorithm: "Naive Fibonacci",
    Time: `${naiveTime} milliseconds`,
    Memory: `${naiveMemory} bytes`,
  },
  {
    Algorithm: "Memoized Fibonacci",
    Time: `${memoizedTime} milliseconds`,
    Memory: `${memoizedMemory} bytes`,
  },
]);
