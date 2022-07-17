//  MULTIPLICATIVE PERSISTANCE...WHATS SPECIAL ABOUT 27....     KYU 7
//  multiply all digits of a nonnegative integet n by eachother... repeat with product until a single digit is obtained
// number of steps is the "multiplicative persistence"
// count number of individual results of each step (not including OG number, but including the single digit)
//  output: the results as an array
//  if input is a single digit return empty list

console.log(per(1)); //  []
console.log(per(10)); //  [0] --> 1*0 = 0
console.log(per(69)); //  [54,20,0]   --> 6*9=54--> 5*4=20--> 2*0 = 0

/*PSUDO    
- check if input is a single digit, if so return []
- split input (num) into an array of digits
- product = numArray.reduce
- store each product in a results Array
- if product is not single digits, repeat
- return results array
*/

// function per(n) {
//   if (n < 10) return [];

//   let resultArr = [];
//   let digits = n.toString().split("");
//   let product = digits.map((e) => Number(e)).reduce((a, b) => a * b);

//   resultArr.push(product);
//   console.log(`digits: ${digits} .. product: ${product}`);

//   if (product < 10) return resultArr;
//   else
//     while (product >= 10) {
//       return `test ${resultArr}`;
//     }
// }


  