/**
 *
 * @param {string } str includes numbers, letters, etc.
 * @return {string} 1's & 0's
 * every single char (spaces, etc included)
 * replace with 1 if vowel, else 0
 * y isnt a vowel
 */

// set a variable to hold Vowels
// plan for case-sentivity
// create variable to hold our result string
// iterate through our input string
// check each char
// if vowel => 1
// else => 0

function vowelOne(str) {
    const vowels = "aeiou;";

    let chars = str.toLowerCase().split("");
    let result = chars.map((char) => {
        if (vowels.includes(char)) {
            return 1;
        } else return 0;
    });
    return result.join("");
}

const vowelOne = (str) => {
    const vowels = "aeiou";
    return str
        .toLowerCase()
        .split("")
        .map((char) => (vowels.includes(char) ? 1 : 0))
        .join("");
};

console.log(vowelOne("abcde"), "10001");
console.log(vowelOne("aeiou, abc"), "1111100100");
console.log(vowelOne(""), "");
console.log(vowelOne("ABC, ?* abc"), "100000100");
