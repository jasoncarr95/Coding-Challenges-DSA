/*  Day 5 (Oct 13.) Fri. 10.14.22

    fxn input array (x arrs of x prim values)
    - shuffle in place
    - innner primitive values can move to any of the inner arrays, length of inner arrs must remain x 
    - thorough random shuffle
    - 3x3 -> 3x3 shuffled
    - no funny biz
*/

function shuffleArray(multArr) {
  for (let i = 0; i < multArr.length; i++) {
    for (let j = 0; j < multArr[i].length; j++) {
      let i1 = Math.floor(Math.random() * multArr.length);
      let j1 = Math.floor(Math.random() * multArr.length);

      let temp = multArr[i][j];
      multArr[i][j] = multArr[i1][j1];
      multArr[i1][j1] = temp;
    }
  }
  return multArr;
}

let myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(shuffleArray(myArray));

console.log(
  shuffleArray([
    ["hello", "friend"],
    ["I'm", "Jason"],
  ])
);

// function Shuffle(arguments) {
//     for (var k = 0; k < arguments.length; k++) {
//         var i = arguments[k].length;
//         if (i == 0)
//             return false;
//         else {
//             while (--i) {
//                 var j = Math.floor(Math.random() * (i + 1));
//                 var tempi = arguments[k][i];
//                 var tempj = arguments[k][j];
//                 arguments[k][i] = tempj;
//                 arguments[k][j] = tempi;
//             }
//             return arguments; // remove this line
//         }
//     }
//     return arguments
