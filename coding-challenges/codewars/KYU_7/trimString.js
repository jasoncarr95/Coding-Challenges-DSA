/*
- replace w/ ... <=dots count as length
- if max length -s <= 3, dots dont count
- str <= max length, return str
*/

/**
 * Returns a trimmed string if longer than given length
 * @param {string} str input string
 * @param {number} size length of string to be trimmed to(including ...)
 * @returns {string}
 */
function trim(str, size) {
  // check str.length VS size... size > str return str | if size <=3 dont count dots
  if (size >= str.length) return str;

  // account for dots (size - 3) for new length
  if (size > 3) size = size - 3;

  // return slice(new length) + ...
  return str.slice(0, size) + "...";
}

console.log(trim("Creating kata is fun", 14), "Creating ka...");
console.log(trim("He", 1), "H...");
console.log(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad");
