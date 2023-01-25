//  Counting Duplicates   KYU 63
//  Parmeters:  given a string. will only contain numbers and letters.. may be empty
//  Return:
// count of distinct case-insensitive letters and numbers that occur more than once in the input string
//  Example:
console.log(duplicateCount("")); //  0
console.log(duplicateCount("abcde")); //  0
console.log(duplicateCount("aabbcde")); //  2

//  PseudoCode:
// case insenitive, so string = string.toLowerCase()
//  split string into an array by character
//  if character occurs more than once, increment result +1

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

//  KISS Keep It Simple Stupid   KYU 7
function isKiss(words) {
  words = words.split(" ");
  return words.every((e) => e.length <= words.length)
    ? "Good work Joe!"
    : "Keep It Simple Stupid";
}
