/**
 * @param {Array<Array>}
 * @return {number} Number of unique arrs formed by picking exactly
 * one element from each sibarray
 */

function getNumArrayCombinations(array) {
  // get rid of duplicates within each subarray
  let uniqueSubs = array.map((subArray) => [...new Set(subArray)]);
  // console.log(uniqueSubs);
  // iterate through arr of subarrs.. pull of 1 elment from each

  let lengths = uniqueSubs.map((subArr) => subArr.length);
  // console.log(lengths);

  return lengths.reduce((a, b) => a * b);

  // start with an empty array => push new unqiue arrays

  // return the length unqiueArrs ( maake sure each is actually unique)
}

console.log(getNumArrayCombinations([[1, 2], [4], [5, 6]]), "=> 4");
// => 4 => [1,4,5], [1,4,6], [2, 4, 5], [2, 4, 6]

console.log(
  getNumArrayCombinations([
    [1, 2],
    [4, 4],
    [5, 6, 6],
  ]),
); // 4

console.log(
  getNumArrayCombinations([
    [1, 2, 3],
    [1, 2],
  ]),
);
// [1,1], [1,2], [2,2], [2,2], [3,1], [3,2] => 5 (2,2 is repear)

console.log(
  getNumArrayCombinations([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
);
// 8
// [1,3,5], [1,3,6], [1,4,5], [1,4,6], [2,3,5], [2,3, 6]. [2,4,5 ], [2,4,6]
