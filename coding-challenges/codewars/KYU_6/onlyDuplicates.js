/**
 * @source https://www.codewars.com/kata/5a1dc4baffe75f270200006b
 *
 *
 * Given a string, remove any characters that are unique from the string.
 *
 * Example:
 * input: "abccdefee"
 * output: "cceee"
 * 
// create a count of each char in string
// remove chars with count === 1
// return new string
 */

export default function onlyDuplicates(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] ? charCount[char]++ : (charCount[char] = 1);
  }

  return str
    .split("")
    .filter((char) => charCount[char] !== 1)
    .join("");
}

console.log(onlyDuplicates("abccdeefee"));
