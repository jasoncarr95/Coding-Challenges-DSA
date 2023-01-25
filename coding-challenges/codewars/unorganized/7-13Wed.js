//  IS THERE A VOWEL IN THERE   KYU 8
//  given an array of nuymbers
//  check if any numbers are charcodes for lowercase vowels --not Y
// if yes, change the array value to a string of that value
//  return resulting array

function isVow(a) {
  const vowCodes = "aeiou".split("").map((e) => e.charCodeAt());

  return a.map(function (e) {
    return vowCodes.includes(e) ? String.fromCharCode(e) : e;
  });
}
