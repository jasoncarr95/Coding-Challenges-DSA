/**
 * @param {number[]} nums
 * @return {number[]}
 */

// runningSum[i] = sum(nums[0]...nums[i])

/* PSUDEO
    - reduce over array
    - if first element -> new element is same
    - else add running total to new array
*/

// var runningSum = function (nums) {
//     let run = [];
//     nums.reduce((previous, current, index) => {
//         // const returns = previous + current;
//         run.push(previous + current);
//         // console.log(
//         //     `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
//         // );
//         return previous + current;
//     }, 0);
//     return run;
// };

//examples
console.log(runningSum([1, 2, 3, 4])); // [1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1,2,3,4,5]
console.log(runningSum([3, 1, 2, 10, 1])); // [3,4,6,16,17]
console.log(runningSum([1, 2, -1, 0])); // [1,3,2,2]

function runningSum(nums) {
    let run = [];
    nums.reduce((previous, current, index) => {
        run.push(previous + current);
        return previous + current;
    }, 0);
    return run;
}
