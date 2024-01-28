/*
input: always an array of strings,,, ever empty? 
output: return new arr, dont mutate

PSUEDO:
- write function that takes in a word, removes consec dupe letters
- split word into an arr of letters
- arr.filter: letter === [index -1](letter before it) remove the letter 
- return the word joined back as string

- arr map => call function on each word in the array
 */
/**
 *
 * @param {string[]} str arr of strings: lowercase only, no spaces
 * @return {string[]} remove consecutive dupe letters from each str
 */
function dup(str) {
  return str.map((word) =>
    word
      .split("")
      .filter((letter, index, arr) => letter !== arr[index - 1])
      .join(""),
  );
}
// function dup(str) {
//     function removeDuplicateLetters(word) {
//         return word
//             .split("")
//             .filter((letter, index, arr) => letter !== arr[index - 1])
//             .join("");
//     }

//     return str.map((word) => removeDuplicateLetters(word));
// }
console.log(
  dup(["abracadabra", "allottee", "assessee"]),
  ` => ["abracadabra","alote","asese"]`,
);
console.log(dup(["kelless", "keenness"]), ` => ["keles","kenes"]`);
console.log(dup(["hello", "world"]), ` => ["helo", "world"]`);
console.log(dup(["hi", "world"]), ` => ["hi", "world"]`);
console.log(dup([]), ` => []`);
