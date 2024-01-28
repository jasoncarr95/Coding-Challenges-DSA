//  ADD LENGTH  KYU 8
function addLength(str) {
  return str.split(" ").map((word) => (word += ` ${word.length}`));
}
// console.log(addLength('apple ban') );   // ["apple 5", "ban 3"]

//  SPACIFY     KYU 7
function spacify(str) {
  return str.split("").join(" ");
}
// console.log(spacify('hello world'));

//  FIND THE UNIQUE NUMBER     KYU 6
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  let unique;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i - 1] && arr[i] != arr[i + 1]) {
      unique = arr[i];
    }
  }
  return unique;
}
// console.log(findUniq([1,0,0]) )     //1
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]) )      //2

// CHECK THE EXAM   KYU 7
function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array2[i]) {
      array2[i] == array1[i]
        ? (score += 4)
        : array2[i] == undefined
          ? (score += 0)
          : (score -= 1);
    }
  }
  return score > 0 ? score : 0;
}
// console.log( checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) );   //6
// console.log( checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) );   // 7

// SUM OF DIFFERENCES IN ARRAY  KYU 8
function sumOfDifferences(arr) {
  let sum = 0;
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }
  return sum;
}
console.log(sumOfDifferences([1, 2, 10])); //9
console.log(sumOfDifferences([-3, -2, -1])); //2
