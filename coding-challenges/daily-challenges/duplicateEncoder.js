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

// console.log(duplicateEncode("Success"), "\n)())())");
console.log(duplicateEncode("Supralapsarian"));

// console.log(duplicateEncode("Hello World")); // => "(()))(()()("
// console.log(duplicateEncode("Success")); // => ")())())"
// console.log(duplicateEncode("")); // => ""
// console.log(duplicateEncode("()() $! ")); // => ")))))(()"
