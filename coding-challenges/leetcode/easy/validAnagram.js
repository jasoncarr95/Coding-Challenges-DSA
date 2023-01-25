/**
 * @param {string} s
 * @param {string} t
 * inputs are lowercase
 * @return {boolean}
 * if valid anagram return true
 */
var isAnagram = function (s, t) {
  // check inputs first
  if (s.length !== t.length) return false;

  return (
    s.toLowerCase().split("").sort().join("") ==
    t.toLowerCase().split("").sort().join("")
  );
};

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car"));

isAnagram("anagram", "nagaram");
isAnagram("rat", "car");
