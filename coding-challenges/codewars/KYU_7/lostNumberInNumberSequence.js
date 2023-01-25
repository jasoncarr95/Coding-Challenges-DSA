/**
 *
 * @param {Array<number>} arr original array
 * @param {Array<number>} mixArr (possibly) mutated array
 * @return {number} number that was deleted.. if no number deleted return 0
 */

// could be empty arr

// check if a num was deleted => compare lenghts.. if lengths are same, return 0
// if lenghts are diff, find which num was deleted
// get the sum/total of each arr
// get difference between the totals ==> deleted num

function findDeletedNumber(arr, mixArr) {
  if (arr.length === mixArr.length) return 0;

  let sumArr = arr.reduce((acc, curr) => acc + curr, 0);
  let sumMixArr = mixArr.reduce((acc, curr) => acc + curr, 0);
  return sumArr - sumMixArr;
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [2, 4, 1, 5]), `=> 3`); // 3
console.log(findDeletedNumber([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]), "=> 0"); // 0 (no deletion)
console.log(findDeletedNumber([], []), "=> 0"); // 0 ()
