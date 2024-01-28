/**
 * Remove all exclamation marks from the end of words.
 * Words are separated by a single space.
 * There are no exclamation marks within a word.
 * @param {string} str sentence... words separated by spaces
 * @returns {string} Removed all exclamation marks from the end of words.
 */

function remove(str) {
  const words = str
    .split(" ")
    .map((word) =>
      word.endsWith("!") ? word.slice(0, word.indexOf("!")) : word,
    );
  return words;
}

console.log(remove("Hi!"), "=> Hi");
console.log(remove("Hi!!!"), "=> Hi");
console.log(remove("!Hi"), "=> !Hi");
console.log(remove("!Hi!"), "=> !Hi");
console.log(remove("Hi! Hi!"), "=> Hi Hi");
console.log(remove("!!!Hi !!hi!!! !hi"), "=> !!!Hi !!hi !hi");
