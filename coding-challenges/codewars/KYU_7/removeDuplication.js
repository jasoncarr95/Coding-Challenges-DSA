/**
 *
 * @param {Array<number>} arr
 * @returns array of numbers with dupes removed
 */
function removeDuplication(arr) {
  return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}
console.log(removeDuplication([1, 2, 3, 2, 4, 6, 2, 6, 7])); // , [1, 3, 4, 7]);
console.log(removeDuplication([1, 2, 1, 2, 1, 1, 2, 2])); // , []);
console.log(removeDuplication([2, 5, 6, 7, 5, 2, 6])); // , [7]);
