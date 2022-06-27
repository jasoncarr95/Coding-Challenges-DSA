// //  Multiple remainder of the division KYU 7
// //  Parmeters:  3 integers (a,b,n)  
// //  Return: boolean -- true if frational part (rounded to 1 digit) of a/b exisits, > 0, multiple of n
// //  Example:
//     console.log(isMultiple(5,4,3)); // true 5/4 = 1.25 -- frac part is 3 .. 
//     console.log(isMultiple(5,2,3))  // false... 1.7 
//     console.log(isMultiple(666,665,2))
// //  PseudoCode:
//     // create variable for the fractional part of a/b (rounded)tofixed 1 decimal place
//     //  check if variable 1)exists, 2) is > 0, 3) is multiple of n (no remainder)
//     // return true or false

// function isMultiple(a, b, n) {
//     let frac = (a/b).toFixed(1)
//     if(frac <= 0) return false
//     let fractional = Number(frac.substring(frac.indexOf('.')+1,frac.length))
//     if(fractional > 0 && n % fractional === 0) return true
//     else return false
// }
// console.log(isMultiple(973464,8001164,5));
