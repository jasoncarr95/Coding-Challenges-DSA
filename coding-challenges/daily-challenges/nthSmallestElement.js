// input array of integers
// size is 3+
// could be + , -, 0
// dont remove dupes
// no funny biz
// output: nth smallest element
// output element itself

// function nthSmallest(array, n) {
//     // sort the array, ascending order (smallest first)
//     array.sort((a, b) => a - b);
//     // find nth element => index of n - 1

//     return array[n - 1];
//     // return nthSmallest
// }
const nthSmallest = (array, n) => {
    array.sort((a, b) => a - b);
    return array[n - 1];
};
console.log(nthSmallest([1, 2, 3, 4, 5], 2), "=> 2"); // 2
console.log(nthSmallest([-10, 5, 0, -5, 3], 1), "=> -10"); // -10
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), "=> 7"); // 7
