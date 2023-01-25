//**** FRIDAY 3/25  - start: kyu6: 12.4%, 92kata (43 completed), 143 honor    -**TOP 100 OF CLAN= 517honor (KYU 5)

//Sum of two lowest positive integers
// Sort Array.. then add 2 first indexes and return the sum
// function sumTwoSmallestNumbers(numbers){
//   numbers.sort((a,b) => a-b)
//   return numbers[0]+numbers[1]
// }
//     console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
//     console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

//CONVERT NUMBER TO REVERSED ARRAY OF DIGITS
// .split() to make an array, MAP A NEW ARRAY OF NUMBERS then reverser()
// function digitize(n) {
//    let arr = n.toString().split('')
//    return arr.map( x => parseInt(x)).reverse()
// }
// console.log(digitize(348587));
// console.log(digitize(0));

//You only need one

//array plus array
// function arrayPlusArray(arr1, arr2) {
//   return arr1.concat(arr2).reduce( (a,b) => a + b )
// }
// console.log( arrayPlusArray([1, 2, 3], [4, 5, 6]) );
// console.log( arrayPlusArray([-1, -2, -3], [-4, -5, -6]) );
// console.log( arrayPlusArray([0, 0, 0], [4, 5, 6]) );
// console.log( arrayPlusArray([100, 200, 300], [400, 500, 600]) );

// sum arrays
// function sum (numbers) {
// return  numbers.length==0? 0 :  numbers.reduce( (a,b) =>a+b );
// };
// console.log( sum([]) );  //0
// console.log( sum([1, 5.2, 4, 0, -1]) ); //9.2
