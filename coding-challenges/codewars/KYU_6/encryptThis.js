// Rules
// convert first letter to ASCII code
// switch second letter with last letter

// encrypt every word of string
// input always just sentences

/**
 *
 * @param {string} text string of space separated words (no special chars)
 * @returns {string}
 */
var encryptThis = function (text) {
  const encryptWord = (word) => {
    const letters = word.split("");
    letters[0] = word.charCodeAt(0).toString();
    [letters[1], letters[letters.length - 1]] = [
      letters[letters.length - 1],
      letters[1],
    ];

    return letters.join("");
  };
  // split text into an array of words
  if (text.length > 1) {
    return text
      .split(" ")
      .map((word) => encryptWord(word))
      .join(" ");
  } else {
    return encryptWord(text) || "";
  }
  // map => encryption
  // return as str
};
console.log(encryptThis("Hello"), "72olle");
console.log(encryptThis("good"), "103doo");
console.log(encryptThis("hello world"), "104olle 119drlo");

// const encryptWord = (word) => {
//   const letters = word.split("");
//   letters[0] = word.charCodeAt(0).toString();
// [letters[1], letters[letters.length - 1]] = [
//   letters[letters.length - 1],
//   letters[1],
// ];

//   return letters.join("");
// };

// console.log(encryptWord("Hello")); // "72olle"
