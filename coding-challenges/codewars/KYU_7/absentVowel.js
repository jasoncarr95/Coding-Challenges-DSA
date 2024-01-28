// PSEUDO
// create variable to hold vowels [a,e,i,o,u]
// iterate through string, if doenst include our vowel then return index of missing vowel
// split&filter str into array of vowels
// vowelArr => return index of missing vowel

/**
 *
 * @param {string} str will contain all vowels except for 1
 * @return {number} index of the missing vowel
 */
function absentVowel(str) {
  const vowels = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4,
  };
  const vowelArray = str.split("").filter((char) => char in vowels);

  for (const letter in vowels) {
    if (!vowelArray.includes(letter)) return vowels[letter];
  }
}

console.log(
  absentVowel("John Doe hs seven red pples under his bsket"),
  `=>  0  ; missing: "a"`,
);
console.log(
  absentVowel("Bb Smith sent us six neatly arranged range bicycles"),
  `=>  3  ; missing: "o"`,
);
