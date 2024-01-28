/**
 * This program compares the performance of different
 * algorithms to compute the Fibonacci numbers.
 */

import { fib, fibCache, fibPrivateCache, fibBottomUp } from "./fibDynamic.js";

// import fib from "./fibDynamic.js";

/**
 * RESULTS:
 *
 *
 */

const getPerformanceTimes = (n) => {
  const times = {};

  const startNaive = performance.now();
  const naiveResult = fib(n);
  const endNaive = performance.now();
  const naiveTime = Number((endNaive - startNaive).toFixed(3));

  const startMemo = performance.now();
  const memoizedResult = fibCache(n);
  const endMemo = performance.now();
  const memoizedTime = Number((endMemo - startMemo).toFixed(3));

  const startPrivateMemo = performance.now();
  const privateMemoizedResult = fibPrivateCache(n);
  const endPrivateMemo = performance.now();
  const privateMemoizedTime = Number(
    (endPrivateMemo - startPrivateMemo).toFixed(3),
  );

  const startBottomUp = performance.now();
  const bottomUpResult = fibBottomUp(n);
  const endBottomUp = performance.now();
  const bottomUpTime = Number((endBottomUp - startBottomUp).toFixed(3));

  times[`fib(${n})`] = naiveTime;
  times[`fibCache(${n})`] = memoizedTime;
  times[`fibPrivateCache(${n})`] = privateMemoizedTime;
  times[`fibBottomUp(${n})`] = bottomUpTime;

  return times;
};

// console.log(getPerformanceTimes(40));

const getPerformanceMemory = (n) => {
  const memory = {};

  const startNaive = process.memoryUsage();
  fib(n);
  const endNaive = process.memoryUsage();
  const naiveMemory = endNaive.heapUsed - startNaive.heapUsed;

  const startMemo = process.memoryUsage();
  fibCache(n);
  const endMemo = process.memoryUsage();
  const memoizedMemory = endMemo.heapUsed - startMemo.heapUsed;

  const startPrivateMemo = process.memoryUsage();
  fibPrivateCache(n);
  const endPrivateMemo = process.memoryUsage();
  const privateMemoizedMemory =
    endPrivateMemo.heapUsed - startPrivateMemo.heapUsed;

  const startBottomUp = process.memoryUsage();
  fibBottomUp(n);
  const endBottomUp = process.memoryUsage();
  const bottomUpMemory = endBottomUp.heapUsed - startBottomUp.heapUsed;

  // convert to kilobytes
  memory[`fib(${n})`] = naiveMemory / 1024;
  memory[`fibCache(${n})`] = memoizedMemory / 1024;
  memory[`fibPrivateCache(${n})`] = privateMemoizedMemory / 1024;
  memory[`fibBottomUp(${n})`] = bottomUpMemory / 1024;

  return memory;
};

console.log(getPerformanceMemory(40));

const getPerformance = (n) => {
  const performance = {};
  performance.times = getPerformanceTimes(n);
  performance.memory = getPerformanceMemory(n);
  return performance;
};

console.log(getPerformance(40));

const getPerformanceTable = (n) => {
  const performance = getPerformance(n);
  //   const times = performance.times;
  //   const memory = performance.memory;

  //   document.querySelector("#performance").innerHTML = ` <table>
};

// console.log(getPerformanceTable(40));

function testPerformance(n) {
  console.log(`Testing performance of finding the ${n}th Fibonacci number`);
  console.log("\nNaive recursive solution");
  console.time(`fib(${n})`);
  console.log(fib(n));
  console.timeEnd(`fib(${n})`);

  console.log("\nMemoized recursive solution");
  console.time(`fibCache(${n})`);
  console.log(fibCache(n));
  console.timeEnd(`fibCache(${n})`);

  console.log("\nMemoized recursive solution with private cache");
  console.time(`fibPrivateCache(${n})`);
  console.log(fibPrivateCache(n));
  console.timeEnd(`fibPrivateCache(${n})`);

  console.log("\nBottom-up iterative solution");
  console.time(`fibBottomUp(${n})`);
  console.log(fibBottomUp(n));
  console.timeEnd(`fibBottomUp(${n})`);
}

// testPerformance(40);

// function testPerformance(n) {
//   // store results in an array of objects
//   const results = [];

//   // naive recursive solution
//   const naiveStart = performance.now();
//   const naive = fib(n);
//   const naiveEnd = performance.now();
//   results.push({
//     name: "Naive recursive solution",
//     time: naiveEnd - naiveStart,
//   });
//   console.log("\n");
//   console.time(`fib(${n})`);
//   const naive2 = fib(n);
//   console.timeEnd(`fib(${n})`);

//   //   console.log(`Testing performance of finding the ${n}th Fibonacci number`);
//   //   console.log("\nNaive recursive solution");
//   //   console.time(`fib(${n})`);
//   //   console.log(fib(n));
//   //   console.timeEnd(`fib(${n})`);

//   //   console.log("\nMemoized recursive solution");
//   //   console.time(`fibCache(${n})`);
//   //   console.log(fibCache(n));
//   //   console.timeEnd(`fibCache(${n})`);

//   //   console.log("\nMemoized recursive solution with private cache");
//   //   console.time(`fibPrivateCache(${n})`);
//   //   console.log(fibPrivateCache(n));
//   //   console.timeEnd(`fibPrivateCache(${n})`);

//   //   console.log("\nBottom-up iterative solution");
//   //   console.time(`fibBottomUp(${n})`);
//   //   console.log(fibBottomUp(n));
//   //   console.timeEnd(`fibBottomUp(${n})`);

//   console.table(results);
//   return results;
// }
