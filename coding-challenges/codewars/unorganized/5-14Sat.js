// //  How much water do I need?   kyu 8
// function howMuchWater(water, load, clothes){
//     if (clothes > (2 * load)) {
//         return 'Too much clothes'
//     } else if (clothes < load){
//         return 'Not enough clothes'
//     }else {
//         return water
//     }
// }

function longest(s1, s2) {
  let letters = new Set(s1.split("").sort().concat(s2.split("").sort()));
  return Array.from(letters).sort().join("");
}

const Calculator = {
  average: function () {
    let sum = Array.from(arguments).reduce((a, b) => a + b, 0);
    return sum / arguments.length || 0;
  },
};

function getSumOfDigits(integer) {
  var sum = 0;
  var digits = Math.floor(integer).toString();
  for (let ix = 1; ix < digits.length; ix++) {
    sum = +digits[ix + 1];
  }
  return sum;
}

function largest(n, xs) {
  xs.sort((a, b) => a - b);
  return n > 0 ? xs.slice(-`${n}`) : 0;
}
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]));
