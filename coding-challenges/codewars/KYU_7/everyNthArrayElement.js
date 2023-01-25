/**
 * function every=> returnsn every nth element of the array
 * - if no args, returns full array
 * - 1 arg, returns every nth (start w/ first)
 * - interval, start => returns every nth starting at start
 *
 *
 */

// interval => always positive.. may be > length
// start always within bounds

function every(arr, interval = 1, start = 0) {
  const result = [];
  for (let i = start; i < arr.length; i += interval) {
    result.push(arr[i]);
  }
  return result;
}

const arr = [0, 1, 2, 3, 4, 5];
console.log(every(arr)); // no args, return whole array => [0,1,2,3,4,5]
console.log(every(arr, 1)); // [0,1,2,3,4,5]
console.log(every(arr, 2)); // => [0,2,4]
console.log(every(arr, 3)); // => [0, 3]
console.log(every(arr, 2, 2)); // [2, 4]
console.log(every(arr, 3, 1)); // [1, 4]
