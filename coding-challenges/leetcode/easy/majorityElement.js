// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

/**
 * @param {number[]} arr
 * @return {number}
 */
var majorityElement = function (arr) {
    const countOccurences = {};
    for (const num of arr) {
        countOccurences[num] = countOccurences[num] + 1 || 1;
        if (countOccurences[num] > arr.length / 2) return num;
    }
    return -q;
};
// var majorityElement = function (arr) {
//     const countOccurences = {};
//     let majElement = arr[0];

//     // iterate through nums, keep track of how many times each num occurs
//     for (const num of arr) {
//         if (num in countOccurences) countOccurences[num]++;
//         else countOccurences[num] = 1;
//         if (countOccurences[num] > arr.length / 2) return num;
//     }

//     // return property in obj with highest value
//     for (const value in countOccurences) {
//         // if (value > count) count = value;
//         if (countOccurences[value] > majElement) majElement = value;
//     }

//     // return countOccurences;
//     return majElement;
// };
console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
