//  Grasshopper - Basic Function Fixer   KYU 8
// goal is to add five to any number and return the new value
function addFive(num) {
  var total = num + 5;
  return total;
}

//  Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s) {
  const vowels = "aeiouAEIOU".split("");
}
// console.log(replace("Hi!") === "H!!")
// console.log(replace("!Hi! Hi!") === "!H!! H!!")
// console.log(replace("aeiou") === "!!!!!")
// console.log(replace("ABCDE") === "!BCD!")

//  Enumerable Magic #25 - Take the First N Elements    KYU 8
// return first n elements of an array
//  Parmeters:  will n always an integer? will it ever be 0 or negative? is so, what do.. neeed to check for empty array?
//  Return: return an array
//  Example:
// console.log(take([0,1,2,3,4,5,8,13],3)) //  [0,1,2]

function take(arr, n) {
  return arr.slice(0, n);
}

//  Enumerable Magic #5- True for Just One? KYU 7
//  Parmeters:  array and a function
//  Return: return true if the function in params returns true for exactly 1 item in th earr
//  Example:

// const bigger_than_ten = (x) => x > 10
// console.log(one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten))// -> true
// console.log(one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) )//-> false
// console.log(one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) )//-> false

//  PseudoCode:
//  run the param function for each element in the param array..
// filter by those that are true.
// if length of the filtered arr ===1 return true
function one(arr, fun) {
  let result = arr.filter((e) => fun(e));
  return result.length === 1;
}

//  Number of Decimal Digits    KYU 7
//  determine num of digits in integer n>=0
// console.log(digits(9)); // 1
// console.log(digits(12345)); // 5

function digits(n) {
  return n.toString().length;
}
