//  Take a Ten Minutes Walk   KYU 6
// perfect grid..single block each letter (direction), 1 min
//  Parmeters:  always given an array that will contain the letters n,s,e,w (directions) , arrays
//  Return:     a boolean t/f
// t if you return to starting point exacatly 10min later
//  Example:
//  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));   // true
//  console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));   // false
//  PseudoCode:
// 10min=10blocks 10 letters
// check if the input is = 10 letter directions ... if not then false
// figure out if end up where started
// north/east to +1 and south/west to -1
// return true if directions total = 0

function isValidWalk(walk) {
  if (walk.length != 10) return false;

  let x = 0;
  let y = 0;
  for (const direction of walk) {
    if (direction === "n") y++;
    else if (direction === "s") y--;
    else if (direction === "e") x++;
    else x--;
  }
  return x === 0 && y === 0;
}

//  Length and two values   KYU 7
//  Parmeters:  given a number (n) and 2 values
//  Return:     return an array of size n filled w alternating values
//  Example:
//  console.log(alternate(5,true,false));   //  [true,false,true,false,true]

//  PseudoCode:

function alternate(n, firstValue, secondValue) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) result.push(firstValue);
    else result.push(secondValue);
  }
  return result;
}

function elevator(left, right, call) {
  let l = Math.abs(call - left);
  let r = Math.abs(call - right);
  return l < r ? "left" : "right";
}
console.log(elevator(0, 1, 1));
