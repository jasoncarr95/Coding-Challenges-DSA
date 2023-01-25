// From: Mon 10.17.22
// Completed: Wed. 10.19.22

/*  Main Ideas
    - Combine Checks:  Avoid nested if statements
    - Guard Causes: Check that causes immediate exiting from functions
        - removes "else"

*/

// challenge simplify function below:

function uglyFunction(arr) {
  // dont need to check
  // if (arr != null) {
  // if (arr.length !== 0) {
  // if (arr[0].length !== 0) {
  if (arr.length > 10) {
    arr.push("maximum");
  } else if (arr.length === 10) {
    arr.push("maximum");
  } else {
    if (arr[0] === "must be maximum") {
      arr.push("failure");
    } else if (arr[0] === "flexible") {
      arr.push("success");
    }
  }
  // }
  // }
  // }
  return arr;
}

function cleanFunction(arr) {
  if (arr.length === 0) return arr;
  if (arr[0].length === 0) return arr;
  // if (arr.length == 0 || arr[0].length == 0) return arr;
  if (arr.length >= 10) arr.push("maximum");
  if (arr[0] === "must be maximum") arr.push("failure");
  if (arr[0] === "flexible") arr.push("failure");

  return arr;
}

let arr = null;
// console.log(uglyFunction(arr));
// console.log(cleanFunction(arr));
arr = [];
// console.log(uglyFunction(arr));
// console.log(cleanFunction(arr));
// arr = [[], 1, 2];
// console.log(uglyFunction(arr));
// console.log(cleanFunction(arr));

// arr = [[], 2, 3];
// console.log(uglyFunction(arr));
// console.log(cleanFunction(arr));

arr = [[1], 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(uglyFunction(arr));
console.log(cleanFunction(arr));
