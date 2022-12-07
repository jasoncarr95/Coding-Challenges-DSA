/**
 *
 * @param {string} code string of unique letters
 * @return {string} sorted string
 */

// input str is always made up of ONLY letters ?
// account for case-sensitivity ?
// return new string, dont mutate?

// split code into an array of letters
// sort arr alphabetically
// return sorted arr as a string

function sortGiftCode(code) {
    return code.toLowerCase().split("").sort().join("");
}

const sortGiftCode = (code) => code.toLowerCase().split("").sort().join("");

console.log(sortGiftCode("abcdef")); // "abcdef"
console.log(sortGiftCode("pqksuvy")); // "kpqsuvy"
console.log(sortGiftCode("zyxwvutsrqponmlkjihgfedcba")); // "abcdefghijklmnopqrstuvwxyz"
