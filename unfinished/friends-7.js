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


