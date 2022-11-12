/**
 * @param {number[]} nums range [0, n] n=size of array.. distinct nums
 * @return {number} return only missing number in range
 *
 *
    Follow up: 
    Could you implement a solution using only:
        - O(1) extra space complexity
        - O(n) runtime complexity?
 */

/**
    Find n (nums.length + 1)
    Range == [0, n]
    Find num in range that is not in nums
 */

// Beats 11.3% runtime // 83.7% mem
var missingNumber = function (nums) {
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) return i;
    }
};

// Beats 47.6% runtime // 52.64% mem
var missingNumber = function (nums) {
    const arrSum = (nums.length * (nums.length + 1)) / 2;
    return arrSum - nums.reduce((a, b) => a + b, 0);
};

console.log(missingNumber([3, 0, 1]), "=> 2");
// n=3 since 3 numbers => range = [0, 3]
console.log(missingNumber([0, 1]), "=> 2");
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), "=> 8");

/**
 * TOP ANSWERS
 */
//

// Javascript easy one
var missingNumber = function (nums) {
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += i + 1 - nums[i];
    }

    return sum;
};

// [Javascript] Simple solution, faster than 99.08% submissions
var missingNumber = function (nums) {
    // construct array of size n+1, to leave a spot for the missing element.
    // Assign each val to -1 so we can see which position was not filled
    // O(n)
    const res = new Array(nums.length + 1).fill(-1);

    // "sort" the elements by assigning to the array based on val
    // O(n)
    for (const num of nums) {
        res[num] = num;
    }

    // the remaining -1 index is the missing value
    // O(n-1)
    return res.indexOf(-1);
};
