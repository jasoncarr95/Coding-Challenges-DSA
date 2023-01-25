/**
 * Return indices of the 2 numbers that add up to `target`
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  // create hashmap to store values and their indices
  const map = new Map();

  // loop through nums
  for (let index = 0; index < nums.length; index++) {
    // get current number and its complement
    const number = nums[index];
    const complement = target - number;

    // if complement is in map and index is not the same as the index of the complement
    if (map.has(complement) && index !== map.get(complement)) {
      // return the index of the complement and the current index
      return [map.get(complement), index];
    }

    // set the number as the key and the index as the value
    map.set(number, index);
  }
};

// const twoSum = (nums, target) => {
//     const map = new Map();

//     for (let index = 0; index < nums.length; index++) {
//         const number = nums[index];
//         const complement = target - number;

//         if (map.has(complement) && index !== map.get(complement)) {
//             return [map.get(complement), index];
//         }
//         map.set(number, index);
//     }
// };

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
