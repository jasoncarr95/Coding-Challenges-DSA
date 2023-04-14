/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// export default
function search(nums, target) {
  // start with mid
  // check if target is < || > mid
  // adjust pointers

  let low = nums.at(0); // starts at first value
  let high = nums.at(-1); // starts at last value
  let mid = Math.floor(low + (high - low) / 2);

  while (low < high) {
    if (nums[mid] === target) return mid;

    if (target > nums[mid]) {
      low = mid;
    }
    if (target < nums[mid]) {
      high = mid;
    }
  }

  return -1;
}

// export default function bs_list(haystack: number[], needle: number): boolean {}

// export { search };

console.log(search([-1, 0, 3, 5, 9, 12], 9), 4);
console.log(search([-1, 0, 3, 5, 9, 12], 2), -1);
