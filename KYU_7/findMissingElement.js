/**
 *
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 * @return {number} element from arr1 that is missing in arr2
 */

/**
 * reduce arr1 & arr2 into sums
 * return the difference of sums
 */

function findMissing(arr1, arr2) {
    let sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
    let sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
    return sum1 - sum2;
}

console.log(findMissing([1, 2, 2, 3], [1, 2, 3]), "=> 2");
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]), "=> 8");
