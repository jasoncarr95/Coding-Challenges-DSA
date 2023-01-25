/*  Day 7 (from Fri 10/7) Completed Fri 10/7


    PARAM: 
    RETURN: 


    swap each letter of alphabet for its opposite (i.e if alphabet were flipped Z-A)
    - opposite case too


    Example: 
        'A'  // first letter of the alphabet, uppercase
        'z'  // last letter of the alphabet, lowercase

        'p'  // 16th letter of the alphabet, lowercase
        'K'  // 16th letter from *end* of alphabet, uppercase

        'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
        // function replaces letters with opposites
        'Example: 0 number or punctuation changes'
        


    PSEUDO:
        - split into array
        - logic to check if its a letter first.. if not, return same char
        - fxn: switch case: logic to check if upper or lower case and swap (if a letter)
        - fxn: to swap places in alphabet position
            - charCodes: "a"=97(1), "z"=122(26)
                - lowerCase -96... upper -64
            - always add up to 27: charCode - 27 absolute value
        - join as an array 
*/

const swapLettersForOpposite = function (str) {
  const checkIfLetter = (char) => {
    return char.toUpperCase() !== char.toLowerCase();
  };
  const isUpperCase = (char) => {
    return char === char.toUpperCase();
  };
  const switchLetterCase = (char) => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else return char.toUpperCase();
  };
  const swapLetterPosition = (char) => {
    // gets position of alphabet 1 - 26
    // gets position of alphabet 1 - 26
    let originalPosition = isUpperCase(char)
      ? char.charCodeAt() - 64
      : char.charCodeAt() - 96;
    let newPosition = Math.abs(originalPosition - 27);
    console.log(newPosition);
    return isUpperCase(char)
      ? String.fromCharCode(newPosition + 64)
      : String.fromCharCode(newPosition + 96);
  };
  let newStr = str
    .split("")
    .map((char, index) => {
      if (!checkIfLetter(char)) return char;
      else {
        let newLetter = switchLetterCase(char);
        return swapLetterPosition(newLetter);
      }
    })
    .join("");
  return newStr;
};

console.log(swapLettersForOpposite("A")); // 'z'
console.log(swapLettersForOpposite("p")); // 'K'
console.log(swapLettersForOpposite("vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH")); // 'Example: 0 number or punctuation changes'

// const swapLetterPosition = (char) => {
const isUpperCase = (char) => {
  return char === char.toUpperCase();
};
//     // gets position of alphabet 1 - 26
//     let originalPosition = isUpperCase(char) ? char.charCodeAt() - 64 : char.charCodeAt() - 96
//     return `originalPosition: ${originalPosition}`
// }

const swapLetterPosition = (char) => {
  const isUpperCase = (char) => {
    return char === char.toUpperCase();
  };
  // gets position of alphabet 1 - 26
  let originalPosition = isUpperCase(char)
    ? char.charCodeAt() - 64
    : char.charCodeAt() - 96;
  let newPosition = Math.abs(originalPosition - 27);
  console.log(newPosition);
  return isUpperCase(char)
    ? String.fromCharCode(newPosition + 64)
    : String.fromCharCode(newPosition + 96);
};
// console.log(swapLetterPosition("a"))
