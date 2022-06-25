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


// //  Minimum to multiple   KYU 7
// //  Parmeters:  a (int between 1 and 1,000,000)   x(int between 1 and 100,000)
//         // is a always larger than x? 
// //  Return: minimum number (non negative) nedded to add or subtract from a to make it a multiple of x
// //**  0 is a multiple of X 
// //  Example:
//     console.log(minimum(5,4)); // 1 --> 5-1 = 4 which is a mult
//     console.log(minimum(10,6)); // 2 --> 10+2 = 12
//     console.log(minimum(60,45));   15
// //  PseudoCode:
//     //  

// function minimum(a, x) {

// }





// //  Friends   KYU 7
//         // n jars .. each jar diff pills each has infitite nu,ber of pills.. one of them makes you glow
//         // determine 
// //  Parmeters:  given n (number of jars.. might be 0. otherwise wlaways a whole positive integer)
// //  Return: an integer (number of friends needed to complete task)
// //  Example:
//         console.log(friends(0));
//         console.log(friends(1));
//         console.log(friends(2));    // 0... just takes 1 pill and sees if he glows
//         console.log(friends(4));    // 1 ... ABCD .. andre takes A B, friend Takes B C (both glow, then B, neither than D, one than that)
//         console.log(friends(5));    // ABCDE AB CD E

//         console.log(friends(655));
// //  PseudoCode:
//     // each jar has 2 options..yes/no (requires 1 persion)

// function friends(n){
//     return Math.ceil(Math.sqrt(n)-2)
// }


//  Mispelled word   KYU 7
//  Parmeters:  given 2 string
//  Return: boolean
//  Example:
//  PseudoCode:
    // check if lengths are only off by 0-1 .. if not then false
    // split strings into arrays
    // check if each letter is included in the other (if not then add 1)

// const mispelled = function(word1, word2) {
//     if(Math.abs(word1.length - word2.length) >= 2) return false
//     let wrong = 0
//     for(let i = 0; i < Math.max(word1.length,word2.length); i++){
//         if(word1[i] != word2[i]) wrong ++
//     }
//     return wrong === 1 ? true : false
// }

// console.log(mispelled("versed","xersed"));  // true
// console.log(mispelled('versed', 'applb'));  // false
// console.log(mispelled('yo','hello'));


