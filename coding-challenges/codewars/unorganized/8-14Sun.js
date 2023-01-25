//  Sum of all the multiples of 3 or 5   KYU 7
//  find sum of all multiples of 3 and 5, up to and invluding n

//  Parmeters:
//  given n, always int? always positive
// what return if not a pos int >= 3
//  Return:
// return one integer, the total sum
//  Example:
//console.log(findSum(10)) // 8 (3+5)
//  PseudoCode:
// brute force: while loop.. add i if a multiple while i <n

function findSum(n) {
  let sum = 0;
  let i = 0;
  while (i <= n) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
    i++;
  }
  return sum;
}

//  Sum of a sequence KYU 7
// return sum of seq (inclusive)
// if begin > end, return 0

//ex:
// console.log(sequenceSum(2,6,2)) // 12-->  (2 + 4 + 6)
// console.log(sequenceSum(1,600,1)) // 15

// PSUEDO:
//  for loop, start at begin, end at ==end, increment by step
// validate input
const sequenceSum = (begin, end, step) => {
  // validate input
  if (begin > end) return 0;

  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

//  GRAVITY FLIP    KYU 8

const flip = (d, a) => {
  //TODO
  return d == "R" ? a.sort((aa, b) => aa - b) : a.sort((aa, b) => b - aa);
};

//  Sort the Odd KYU 6
// given arr of num
// sort odd (ascending).. leave even in orignal place

/* PSUEDO
    - create a filtered array of just odd numbers, which we will sort
    - go back and replace odd number in OG array.. 
            - iterate through our sorted arr.. 

    
    - insert placeholders for the odd numbers?
    */

// EX:
console.log(sortArray([5, 8, 6, 3, 4])); //  [3,8,6,5,4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  let sortedOdds = array.filter((e) => e % 2 != 0).sort((a, b) => a - b);

  let result = array.map((e) => {
    if (e % 2 != 0) {
      return (e = sortedOdds.shift());
    } else return (e = e);
  });

  return result;
}
