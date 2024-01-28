/**
 *
 * @param {Array<string>} arr array of strings of the same letter type
 * @return {Array<string}
 *     length of each element == average length of elements in input prev arr
 */

/*
    - find average length of input array
        -  get lengths of each element, and reduce to a total sum of all lengths.. 
            - div by # inputs (length of whole input arr)
    - map input array to new arr
        - fill each element with the og char value * avg length 
*/

// function averageLength(arr) {
//     let avgLength = Math.round(
//         arr
//             .map((element) => element.length)
//             .reduce((prev, curr) => prev + curr, 0) / arr.length
//     );
//     return arr.map((element, index) => {
//         let char = arr[index][0];
//         return char.repeat(avgLength);
//     });
// }
function averageLength(arr) {
  let avgLength = Math.round(
    arr.reduce((acc, curr) => acc + curr.length, 0) / arr.length,
  );
  return arr.map((element) => element[0].repeat(avgLength));
}

console.log(averageLength(["u", "y"]), "=>  ['u', 'y']");
// => average length is 1
console.log(averageLength(["aa", "bbb", "cccc"]), "=> ['aaa', 'bbb', 'ccc']");
// => average length is 3
console.log(
  averageLength(["aa", "bb", "ddd", "eee"]),
  "=> ['aaa', 'bbb', 'ddd', 'eee']",
);
// => average length is 2.5 round up to 3
