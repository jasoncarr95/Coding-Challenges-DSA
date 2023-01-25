/*
	input: a sequence... arr of nums or str => "AAABBCDD" || [1,2,2,3,3]
    output: arr

    remove elements with same value next to eachother... preserve order
*/
/*  PSEUDO
        - make sure sequence is in arr form
        - filter arr e !== arr[i+1]
*/

// FIRST SOLUTION
// var uniqueInOrder = function (iterable) {
//     // return typeof iterable === "string" && iterable.split("")
//     if (typeof iterable === "string") iterable = iterable.split("");
//     return iterable.filter((item, index) => item !== iterable[index + 1]);
// };

// REFACTORED
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((item, index) => item !== iterable[index + 1]);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder("ABBCcAD")); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]
