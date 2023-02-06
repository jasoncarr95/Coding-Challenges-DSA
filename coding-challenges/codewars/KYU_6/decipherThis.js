// Rules:
// second and last letter are switched
// first letter is replaced by char code

/**
 *
 * @param {string} str string of space separated words (includes numbers)
 * @returns {string}
 */
function decipherThis(str) {
  const decipherWord = (word) => {
    const first = parseInt(word);
    word = word.replace(first, String.fromCharCode(first));

    let letters = word.split("");

    [letters[1], letters[letters.length - 1]] = [
      letters[letters.length - 1],
      letters[1],
    ];

    return letters.join("");
  };

  if (str.length > 1) {
    return str
      .split(" ")
      .map((word) => decipherWord(word))
      .join(" ");
  } else {
    return decipherWord(str) || "";
  }
}

console.log(decipherThis("72olle 103doo 100ya")); // 'Hello good day'
console.log(decipherThis("82yade 115te 103o")); // 'Ready set go'

// const decipherWord = (word) => {
//   const first = parseInt(word);
//   word = word.replace(first, String.fromCharCode(first));

//   let letters = word.split("");

//   [letters[1], letters[letters.length - 1]] = [
//     letters[letters.length - 1],
//     letters[1],
//   ];

//   return letters.join("");
// };

// console.log(decipherWord("72olle"));
