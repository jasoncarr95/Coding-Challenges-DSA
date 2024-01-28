//  Super Duper Easy    KYU 8
// return value multiplied by 50 and increased by 6
// if argument is a string, return error
function problem(x) {
  return typeof x === "string" ? "Error" : x * 50 + 6;
}

//  Who ate the cookie   KYU 8
function cookie(x) {
  let cookieEater = "";
  typeof x === "string"
    ? (cookieEater = "Zach")
    : typeof x === "number"
      ? (cookieEater = "Monica")
      : (cookieEater = "the dog");
  return `Who ate the last cookie? It was ${cookieEater}!`;
}

//  Delete occurrences of an element if it occurs more than n times   KYU 6
// create new list that contains each number of list at most N times without reordering
//  Parmeters:  given an array of numbers and a number(N)
//  Return: return a new array
//  Example:
//     console.log(deleteNth([20,37,20,21],1)) //  [20,37,21]
//     console.log(deleteNth([1,2,3,1,2,1,2,3],2)) //  [1,2,3,1,2,3]
//                                                 // take 1,2,3,1,2 dand drop the next 1,2 since 1&2 woulds be in result 3x.. then take 3

// //  PseudoCode:

// function deleteNth(arr,n){
//   // ...
// }

// Return a strings even characters // kyu7
//  Parmeters: given a string
//  Return: return an array
// **inedx starts at 1... return all even characters
// if string is < 2 char or > 100char retirn invalid
//  Example:
//  console.log(evenChars("abcdefghijklm"));    //  ["b", "d", "f", "h", "j", "l"]
//  console.log(evenChars("a"));    //  "invalid string"
//  PseudoCode:
// check string length is valid
// if so, for loop.. index +1 is even? if so, add to return array
function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";
  let result = [];
  let str = string.slice("");
  for (let i = 0; i < string.length; i++) {
    if (i % 2 != 0) result.push(str[i]);
  }
  return result;
}

//  Multiples!   KYU 7
function multiple(x) {
  if (x % 3 === 0 && x % 5 === 0) return "BangBoom";
  else if (x % 3 === 0) return "Bang";
  else if (x % 5 === 0) return "Boom";
  else return "Miss";
}

//  Multiples and Digit Sums   KYU 7
//  Parmeters:  n is an integer
// find all multiples of n up to and including 100
// then take the digit sum of each multiple (i.e. 45 --> 4+5 => 9)
// finally, get tht total sum of each new digit sum
//  Return: total sum of each digit sum.. a number
//  Example:
console.log(procedure(25)); //  multiples(25 , 50, 75, 100)... digit sums(7,5,12,1) ... return 25
console.log(procedure(10)); //  46
console.log(procedure(49)); //  30

//  PseudoCode:
//  max multiple is 100/n .. i.e if 25 max is 100/25= 4
//  use mm for top of for loop... 1-mm return multiples to a new arr
// map multiples arr to digit sum
// reduce that mapped sums

//***Works ... cheated...wtf tho
// function procedure(n){
//     let arr = [];
//     for (let i = n; i <= 100; i++) {
//         if (i % n == 0) {
//         arr.push(i);
//         }
//     }
//     return arr.map(num => String(num).split('').reduce((acc, n) => acc + +n, 0)).reduce((sum, x) => sum + x);
// }
// *** doesnt work on code wars...wtf
function procedure(n) {
  let multiples = [];
  for (let i = 1; i <= 100; i++) {
    if (i % n === 0) multiples.push(i);
  }
  return multiples
    .map((e) =>
      e
        .toString()
        .split("")
        .reduce((a, b) => Number(a) + Number(b)),
    )
    .reduce((a, b) => a + b);
}
