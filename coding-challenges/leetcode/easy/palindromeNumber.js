/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return x === Number(x.toString().split("").reverse("").join(""));
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
