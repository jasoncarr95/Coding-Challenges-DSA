# Performance Comparison of fibonacci sequence algorithms

## Introduction/Methodology

To compare the performance of the different algorithms, we can use methods such as `performance.now()` or `console.time()` and `console.timeEnd()` to measure the time it takes to run a function. We can also use `process.memoryUsage()` to measure the memory usage of a function.

### Measuring Time

Performance.now() and console.time() and console.timeEnd() are two methods that can be used to measure the time it takes to run a function.

Console.time() is simpler to use, but it is not as accurate as performance.now().

#### performance.now()

```js
const start = performance.now();
fib(10);
const end = performance.now();
console.log(`Time Elapsed: ${(end - start) / 1000} seconds.`);
```

#### console.time() and console.timeEnd()

```js
console.time("fib");
fib(10);
console.timeEnd("fib");

// Output: fib: 0.000ms
```

### Measuring Memory Usage

process.memoryUsage() is a built-in node.js method that returns an object describing the memory usage of the Node.js process measured in bytes.

The heapUsed property is the total amount of heap memory used by the process, measured in bytes. Bytes are converted to megabytes for readability.

```js
const start = process.memoryUsage().heapUsed;
fib(10);
const end = process.memoryUsage().heapUsed;
console.log(`Memory Used: ${(end - start) / 1_000_000} MB`);
```

---

performance.now() returns the number of milliseconds elapsed since the UNIX epoch. This is a good way to measure the time it takes to run a function.

process.memoryUsage() returns an object containing the memory usage of the current process. This is a good way to measure the memory usage of a function.

## Big-O Table Comparison

| Algorithm          | Time Complexity | Space Complexity |
| ------------------ | --------------- | ---------------- |
| Naive              | O(2^n)          | O(n)             |
| Memoized           | O(n)            | O(n)             |
| Memoized (Private) | O(n)            | O(n)             |
| Bottom Up          | O(n)            | O(1)             |

## Performance Comparison

| Algorithm          | Time (ms) | Space (MB) |
| ------------------ | --------- | ---------- |
| Naive              | 0.000     | 0.000      |
| Memoized           | 0.000     | 0.000      |
| Memoized (Private) | 0.000     | 0.000      |
| Bottom Up          | 0.000     | 0.000      |

```

```
