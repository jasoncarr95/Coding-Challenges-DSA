/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/**
 * input always valid (arr length >=2)
 */

// @ts-check

/**
 *
 * @param {number[]} numbers array of integers
 * @param {number} target sum of 2 different items in array
 */
// * @returns {number[]} indicies of the values that add up to target

function twoSum(numbers, target) {
  // iterate through numbers, check if target - number[i] is in the array

  // {element: index}
  const map = new Map();
  for (let i = 0; i <= numbers.length; i++) {
    const diff = target - numbers[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(numbers[i], i);
  }
  return [];
}

console.log(twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0]
