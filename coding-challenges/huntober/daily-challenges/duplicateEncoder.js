/**
 * @param {string} word
 * @return {string}
 */

// convert str => new str
// "(" if char only appears once in str, otherwise ")"
// input always str.. could be str of chars letters, nums, etc..
// spaces also encoded
// NOT case sensitive
// dont mutate og string, return new one
// if empty, return empty

// split str into an array of chars
// map chars => new array of ()
// if char occurs only once => "(" , else ")"
// return as a string

// return word encorded

function duplicateEncode(word) {
  const chars = word.toLowerCase();
  return chars
    .split("")
    .map((char) => {
      if (chars.indexOf(char) === chars.lastIndexOf(char)) {
        return "(";
      } else return ")";
    })
    .join("");
}
console.log(duplicateEncode("Hello World"), ` => (()))(()()(`);
console.log(duplicateEncode("Success", ` => )())())`));

// function duplicateEncode(word) {
//     const chars = word.toLowerCase().split("");
//     const charMap = {};

//     chars.forEach((char) => {
//         char in charMap ? charMap[char]++ : (charMap[char] = 1);
//     });

//     let result = "";
//     chars.forEach((char) => {
//         charMap[char] > 1 ? (result += ")") : (result += "(");
//     });
//     return result;
// }

console.log(duplicateEncode("")); // => ""
console.log(duplicateEncode("()() $! ")); // => ")))))(()"

console.log(duplicateEncode("Success"), "\n)())())");
console.log(duplicateEncode("Supralapsarian"));

duplicateEncode(
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iste corrupti aperiam omnis perferendis eum quidem quo necessitatibus natus! Eveniet reiciendis est reprehenderit quo ullam praesentium amet aperiam veniam illo!",
);
