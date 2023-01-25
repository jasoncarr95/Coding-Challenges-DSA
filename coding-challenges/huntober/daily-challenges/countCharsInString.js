// Count all the occurring characters in a string.
// i.e aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty?
//Then the result should be empty object literal, {}.

// input: special char
/**
 *
 * @param {string} str
 * @returns {object} count of char occurences in str. i.e {'a': 2, 'b': 1}
 */
export default function countCharsInString(str) {
  // check if str is empty, if so return empty object
  if (str.length === 0) return {};
  // iniatialize empty object
  const charCount = {};
  // iterate over str, for each char
  // check if char is a property in our obj.. if not initialize, else ++
  for (const char of str) {
    if (char in charCount) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

console.log(countCharsInString("aba"), { a: 2, b: 1 });
console.log(countCharsInString(""), {});
