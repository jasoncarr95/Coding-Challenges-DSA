/* eslint-disable no-restricted-syntax */
/* Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 
*/

/**
 * create table to tally #occurences {char: counter}
 */

/**
 * return the character that appears most often
 * @param {string} str string of characters
 */
function maxCharacter(str) {
    const charMap = {};
    let count = 0;
    let maxChar = null;

    // create map of {char: numOccurences}
    for (const char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (const char in charMap) {
        // Reassign values if > current maxChar
        if (charMap[char] > count) {
            count = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

function mostFrequentCharacter(str) {
    // Create an empty map
    const charMap = {};

    // Iterate through the string, counting the number of occurrences of each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    // Iterate through the map, keeping track of the character with the highest count
    let maxChar = null;
    let maxCount = 0;
    for (const char in charMap) {
        if (charMap[char] > maxCount) {
            maxChar = char;
            maxCount = charMap[char];
        }
    }

    // Return the character with the highest count
    return maxChar;
}
let result = mostFrequentCharacter("hello, world!");
// result should be 'l'

console.log(maxCharacter("Hello World!"), "l");
console.log(mostFrequentCharacter("Hello World!"), "l");
