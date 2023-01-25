// function gimme (triplet) {
//     let sorted = triplet.slice().sort( (a,b) => a-b)
//     let middle = sorted[1];
//     return triplet.indexOf(middle)
// }
// console.log(gimme([2,3,1])); //0
// console.log(gimme([5,10,14])); //1

function squareOrSquareRoot(array) {
  let result = [];
  array.forEach((num) => {
    Number.isInteger(Math.sqrt(num))
      ? result.push(Math.sqrt(num))
      : result.push(num * num);
  });
  return result;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); //[ 2, 9, 3, 49, 4, 1 ]
