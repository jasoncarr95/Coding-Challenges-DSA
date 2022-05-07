    //define a card suit       KYU 8
function defineSuit(card) {
  return card.includes('♣') ? 'clubs' : card.includes('♠') ? 'spades' : card.includes('♥') ? 'hearts' : 'diamonds' ;
}

    // isograms     KYU 7
function isIsogram(str){
 return new Set(str.toLowerCase().split('')).length === str.toLowerCase().split('').length 
}
// console.log(isIsogram('isogram'));

    // Anagram detection    KYU 7
//?????

    // const isAnagram = function(test, original) {
//     if(test.length != original.length){
//         return false
//     }else{
        
//         for(let i = 0; i < test.length; i++){
//             if ( !original.includes(test[i]) )
//             return false
//     }
// }
// return true
// };
// console.log(isAnagram('foefet','toffee'));


    // WHO LIKES THIS   KYU 6
function likes(names) {
  if (names.length==0) {
      return 'no one likes this'
  }else if(names.length == 1){
      return `${names[0]} likes this`
  }else if(names.length == 2){
    return `${names[0]} and ${names[1]} like this`
  }else if(names.length == 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else {
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    } 

}

//  ALTERNATE CAPITALIZATION      KYU 7
function capitalize(s){
    let result = ['',''];
    for(let i = 0; i<s.length; i++){
        if(i%2 ==0){
            result[0]+= s.charAt(i).toUpperCase();
            result[1]+= s.charAt(i).toLowerCase();
        }else{
            result[1]+= s.charAt(i).toUpperCase();
            result[0]+= s.charAt(i).toLowerCase();
        }
    }
    return result
};
// console.log(capitalize('codewars'));   // ['CoDeWaRs', 'cOdEwArS']


//  VOWEL REMOVER   KYU 8
// function shortcut (string) {
//   const vowels = ['a','e','i','o','u'];
//   for(let i = 0; i < string.length; i++)
// }
// console.log(shortcut('complain'));

    //  OALINDROME STRINGS  KYU 8
function isPalindrome(line) {
  return line === line.split('').reverse().join('')
}
console.log(isPalindrome('walter'));
console.log(isPalindrome('anna'));
console.log(isPalindrome('12321'));