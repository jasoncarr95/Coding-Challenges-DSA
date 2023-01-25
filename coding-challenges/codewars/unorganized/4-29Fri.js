// function arrayDiff(a, b) {
//     return a.filter((e) => !b.includes(e))
// }

// function spinWords(string){
//     let words = Array.from(string)
//     words.forEach(word=>{
//        if (word.length>=5)word.split('').reverse().join('')
//    })
//    return words.join('')
// }

//   console.log(spinWords("Welcome"))
//   console.log(spinWords("This is rehtona test"))

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};
console.log(isSquare(3));
