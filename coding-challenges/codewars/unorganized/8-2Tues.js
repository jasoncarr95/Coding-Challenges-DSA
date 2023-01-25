//  Love Vs Friendship   KYU 7
//  return sum of letters .. a=1, b=2, etc
//  Parmeters:
// always lowercase string.. never empty
//  Return:
// number
//  Example:
// console.log(wordsToMarks("attitude")); //  100
// console.log(wordsToMarks("friends")); //  75
//  PseudoCode:
// split string into an array of letters
// map each letter into a value.. based on its position in alphabet
//  get&return the sum of all letter values

function wordsToMarks(string) {
  let letterValues = string.split("").map((e) => e.charCodeAt() - 96);
  return letterValues.reduce((a, b) => a + b);
}

//  My Language Skills   KYU7
//  Parmeters: given an object of languages/scores
//  Return: an array of the languages with scores >= 60... DESCENDING ORDER OF RESULTS
//  Example:
// console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 })); //  ["Ruby,Python"]
// console.log(myLanguages({ Hindi: 60, Dutch: 93, Greek: 71 })); //   ["Dutch", "Greek", "Hindi"]
// console.log(myLanguages({ "C++": 50, ASM: 10, Haskell: 20 })); //  []

//  PseudoCode:

function myLanguages(results) {
  return Object.keys(results)
    .filter((r) => results[r] >= 60)
    .sort((a, b) => results[b] - results[a]);
}

//  Take the Derivative   KYU8
// multiply the 2 numbers, then subtract 1 from exponent

//  Parmeters: 2 numbers.. first=coefficient, 2nd= exponent
// exponent will never be 1, neither number will ever be 0
//  Return: string
//  Example:
// console.log(derive(7,8));   // "56x^7"
// console.log(derive(5,9));   // "45x^8"
//  PseudoCode:
//  first find the product of the 2 params
//  find exponent-1
//  return a concat string

function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}

//  Flatten and sort an array   KYU 7
// given 2 dimensional array of integers, return the flatten versiopn with all integers sorted in ascending order
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])); // [1,2,3,4,5,6,7,8,9]

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}
