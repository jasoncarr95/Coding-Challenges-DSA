//  Are the numbers in order?   KYU 7
//  Parmeters:  input is array of integers
// determine if numbers are in ascender order (no 2 adjacent integers where the left > right)

// input always valid.. 0 or 1 int is sorted
//  Return: boolean
//  Example:
// console.log(inAscOrder([1,2,4,7,19])) //true
// console.log(inAscOrder([1,3,8,2,4]))   // false

//  PseudoCode:
// iterate through the array - forloop
// if element > element at index +1, return false. else return true

// O(n)

function inAscOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

//  Make acronym    KYU 7
// input is a string
// make acronym
// split to words by space char-> take every first letter -> uppercase  them-> join

// console.log(toAcronym("Code wars")); // "CW"
// console.log(toAcronym("what it do babyyy")); // "WIDB"

function toAcronym(inp) {
  return inp
    .split(" ")
    .map((e) => e[0].toUpperCase())
    .join("");
}

function numberToPower(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}

//   console.log(numberToPower(3,2));  //   9 (3*3)
// console.log(numberToPower(2, 3)); // 8 (2*2*2)
