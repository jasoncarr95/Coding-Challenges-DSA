/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// export default
function search(nums: number[], target: number): number {
  // start with mid
  // check if target is < || > mid
  // adjust pointers

  let low = nums.at(0); // starts at first value
  let high = nums.at(-1); // starts at last value
  const mid = Math.floor(low + (high - low) / 2);

  // Find Midpoint
  // if length is odd: (n - 1) / 2
  // if even:

  // let mid =

  return -1;
}

// export default function bs_list(haystack: number[], needle: number): boolean {}

// export { search };

console.log(search([-1, 0, 3, 5, 9, 12], 9), 4);
console.log(search([-1, 0, 3, 5, 9, 12], 2), -1);

function findMedian(sortedArray: number[]): number | null {
  const n = sortedArray.length;

  if (n === 0) {
    return null; // or throw an error message, depending on your requirements
  }

  if (n % 2 === 1) {
    // n is odd
    return sortedArray[(n - 1) / 2];
  } else {
    // n is even
    const index1 = n / 2 - 1;
    const index2 = n / 2;
    return (sortedArray[index1] + sortedArray[index2]) / 2;
  }
}

// let sortedArray = [2, 3, 5, 6, 8];
// console.log(findMedian(sortedArray)); // Output: 5
// sortedArray = [1, 2, 3, 4];
// console.log(findMedian(sortedArray)); // Output: 5

// function getMidPoint(arr: number[]): number {
//   let low = arr.at(0) || 0; // starts at first value
//   let high = arr.at(-1) || 1; // starts at last value
//   const mid = Math.floor(low + (high - low) / 2);
//   return mid;
// }

// console.log(getMidPoint([1, 2, 3, 4]));
// console.log(getMidPoint([1, 2, 3, 4, 5]));
