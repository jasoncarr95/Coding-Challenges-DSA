// // Sum up the random String   KYU 8
// //  Parmeters:  given string of random characters
// //  Return: return sum of the char that are integers    2015 is one character, NOT 4 diff numbers
//             //  11-14  is 11 and 14 TWO
//             //  3.14  is 3 and 14
// //  Example:
//     console.log(sumFromString("1+1=2"));    //  4
//     console.log(sumFromString("In 2015, I blah blah 6."));    //  2021
    
// //  PseudoCode:

// function sumFromString(str){
//   // ...
// }



//  Measuring Average Speed   KYU 7
//  Parmeters:  given 2 strings (distance in meters or km),     time(seconds or minuts)
//  Return: return string   mph rounded to nearest integer
        //  one metre per second is defined as 2.23694 miles per hour.
//  Example:
console.log(calculateSpeed('3km','5min'))   //  '22mph
console.log(calculateSpeed('100m','10s'))   //  '22mph

//  PseudoCode:
/*  Find meters per second 
1.check if distance is km, if so multiply by 1000
2. check if time is m , if so multiply by 60
*/

function calculateSpeed(distance, time) {
// ...
}



//      =================

//  Ones and Zeros  KYU 7
    //  given array of ones and zeros, convert the equivalent binary value to an integer
    //example:
    console.log(binaryArrayToNumber([0,0,0,1])) // 1
    console.log(binaryArrayToNumber([0,0,1,0])) // 2

    
const binaryArrayToNumber = arr => {
// your code
};



//      ========
// //  Sort by Last Char   KYU 7
// //  Parmeters:  given a string of words (x)
// //  Return: return an array of the words, sorted alphabetically by the last character in each.. if 2 have same last char, should be in original order
// //  Example:
//     console.log(last("man i need a taxi up to ubud"));  //  []
    
// //  PseudoCode:
//     //  split string into an array by space (words)
//     //  sort by last char

// function last(x){
    
//     let arr = x.split(' ')
//     let a = arr[0]
//     // return a.charAt(a.length-1)
//     return arr.sort((a,b)=> a.charAt(a.length-1) - b.charAt(b.length-1))
// }

