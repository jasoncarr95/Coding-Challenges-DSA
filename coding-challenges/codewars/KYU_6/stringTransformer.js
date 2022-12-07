/**
 *
 * @param {string} str only english alphabet & spaces
 * @return {string} str transformed
 *
 * change every char case (lower <-> uppercase), reverse order of words
 *
 */

// split str into an array by char
//  check if element is a character (or just spaces)
// change letter case if char
// return as string.. chars all reversed

function stringTransformer(str) {
    const changeCharCase = (char) => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else return char.toUpperCase();
    };
    // change char case
    let transformed = str
        .split("")
        .map((char) => changeCharCase(char))
        .join("");
    // return with words in reversed position
    return transformed.split(" ").reverse().join(" ");
}

console.log(stringTransformer("Example Input"), "\niNPUT eXAMPLE");
console.log(stringTransformer("   Example  Input "), "\n   iNPUT  eXAMPLE ");
// => only reverse words, not spaces
