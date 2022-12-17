// Given an array of numbers,
// return all pairs that add up to a given sum.
// The numbers can be used more than once.

// @ts-check

// /**
//  *
//  * @param {number[]} arr
//  * @param {number} sum target sum
//  * @returns {array[]}
//  */

// function twoSum(arr, sum) {
//     const pairs = [];
//     const nums = {};
//     // nums is our hashmap => {number: 1}

//     for (const num1 of arr) {
//         const num2 = sum - num1;
//         if (nums[num2]) {
//             pairs.push([num1, num2]);
//         } else {
//             nums[num1] = 1;
//         }
//     }
//     console.log(nums);
//     return pairs;
// }

// console.log(twoSum([1, 2, 2, 3, 4], 4), "=>", [
//     [2, 2],
//     [3, 1],
// ]);

/**
 *
 * @param {number[]} numbers
 * @param {number} sum target sum
 * @returns {array[]}
 */
function twoSum(numbers, sum) {
    const pairs = [];
    const complements = new Set();

    for (const number of numbers) {
        if (complements.has(number)) {
            pairs.push([number, sum - number]);
        } else {
            complements.add(sum - number);
        }
    }

    return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), "=>", [
    [2, 2],
    [3, 1],
]);
