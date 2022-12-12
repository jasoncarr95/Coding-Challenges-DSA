// Given an integer array nums,
// return true if any value appears at least twice in the array
//  return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // iterate through nums, check if theres a duplicate (nums[i] occurs more than once)

    const map = [];
    for (const num of nums) {
        console.log(map);
        if (num in map) return true;
        else map.push(num);
    }
    console.log(map);
    return false;
};
// var containsDuplicate = function (nums) {
//     // iterate through nums, check if theres a duplicate (nums[i] occurs more than once)
//     const unique = [...new Set(nums)];
//     return unique.length !== nums.length;

// };

console.log(containsDuplicate([1, 2, 3, 1]), "=> true");
console.log(containsDuplicate([1, 2, 3, 4]), "=> false");
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 3]), "=> true");
