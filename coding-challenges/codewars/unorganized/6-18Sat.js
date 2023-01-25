// const containsDuplicate = function(nums) {
//     const unique = [...new Set(nums)]
//     set.length
// };

//  Maximum Length Difference   KYU 7
//  Parmeters:  given 2 arrays of strings
// let x be any string in first, y be any in second
//  Return: return a number     *if either array is empty, return -1
// max diff between
//  Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
//console.log(mxdiflg(a1, a2)) //  13
//  PseudoCode:
// check if either arr is empty, if so, return -1
// find max lengths and min lengths of each arr
// return larger of xmax-ymin or ymax-ymin

function mxdiflg(a1, a2) {
  if (a1.length < 1 || a2.length < 1) return -1;
  a1Lengths = a1.map((e) => e.length);
  a2Lengths = a2.map((e) => e.length);
  const a1Bigger = Math.max(...a1Lengths) - Math.min(...a2Lengths);
  const a2Bigger = Math.max(...a2Lengths) - Math.min(...a1Lengths);

  return Math.max(a1Bigger, a2Bigger);
}

//  sPoNgEbOb MeMe   KYU 7
//  Parmeters:  given a string ... can be empty? ... any numbers??
//  Return: StRiNg
//  Example:
//console.log(spongeMeme('stop Making spongebob Memes!'));    //  "StOp mAkInG SpOnGeBoB MeMeS!"

//  PseudoCode:
//  split string into arr by characters
// loop through... every other upper/lower

function spongeMeme(sentence) {
  const chars = sentence.split("");
  for (let i = 0; i < chars.length; i++) {
    i % 2 != 0
      ? (chars[i] = chars[i].toLowerCase())
      : (chars[i] = chars[i].toUpperCase());
  }
  return chars.join("");
}

//  Rock Paper Scissors Lizard Spock   KYU 7
//  rules[pl1].includes(pl2)

function rpsls(pl1, pl2) {
  if (pl1 === pl2) return "Draw!";
  const rules = {
    Scissors: ["Paper", "Lizard"],
    Paper: ["Rock", "Spock"],
    Rock: ["Lizard", "Scissors"],
    Lizard: ["Spock", "Paper"],
    Spock: ["Scissors", "Rock"],
  };
  return rules[pl1].includes(pl2) ? "Player 1 Won!" : "Player 2 Won!";
}
console.log(rpsls("Rock", "Spock"));

//  Sort with a sorting array   KYU 7
//  Parmeters:  given 2 arrays.. guarenteed to be same zize, and contain required indices.. could be empty?
//  Return: return an array .... initialArray sorted using idices in sortingARR
//  Example:
//  console.log( sort(['z', 'x', 'y'], [0, 2, 1]) )   // ['z', 'y', 'x']
//  console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]))  // [1, 3, 2, 5, 4]
//  PseudoCode:
// create a new array []
// forEach sort(index) ... newArr[index] = initial[index]

//  WHY TF DIDNT THIS WORK ON CODEWARS... WORKED WHEN I CONSOLELOGGED WTF
// function sort(initialArray, sortingArray) {
//     const result = []
//     for(let i = 0; i < initialArray.length; i++){
//         result.push( initialArray[sortingArray[i]] )
//     }
//     return result
// }
function sort(initialArray, sortingArray) {
  const result = [];
  for (let i = 0; i < initialArray.length; i++) {
    result[sortingArray[i]] = initialArray[i];
  }
  return result;
}
