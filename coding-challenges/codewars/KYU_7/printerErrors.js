/**
 *
 * @param {string} str length >= 1, contains only letters a-z.. always lowercase
 * @return {string} rational number:
 * num=number errors, denom = length of string.. dont reduce
 *
 */

// iterate over str, check if contains anything not between a-m
// if it does then we add 1 to errorCount
// return "errorCount/str.length"

function printerError(str) {
  const correctChars = "abcdefghijklm";
  let errorCount = 0;
  for (let char of str) {
    if (!correctChars.includes(char)) errorCount++;
  }
  return `${errorCount}/${str.length}`;
}

console.log(printerError("aaabbbbhaijjjm"), " => 0/14");
console.log(printerError("aabbzxc"), "=> 2/7");
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"), "=> 8/22");
