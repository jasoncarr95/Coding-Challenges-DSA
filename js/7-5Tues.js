//  THE OFFICE I - OUTED   KYU 7
/*
        - given an object (meet) containiner team member names as keys, and their happiness rating/10 as value
        - assess overall happiness rating of group. if <= 5, return 'Get Out Now' else return 'Nice Work Champ!'
        - happiness rating is total score/number of people... boss score is worth double
    */
//  console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'))   //  'gtfo
//  console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie')); // 'nice
//  PseudoCode:
//  create a variable for totalHappinessScore
//  loop through the object     for (const property in object)
// if property === 'boss', property[score] *= 2
// totalHappinessScore += property[score]
//  divide totalHappinessScore by number of team members

function outed(meet, boss) {
  let totalHappinessScore = 0;
  for (const teamMember in meet) {
    if (teamMember == boss) {
      meet[teamMember] *= 2;
    }
    totalHappinessScore += meet[teamMember];
  }
  return totalHappinessScore / Object.keys(meet).length > 5
    ? "Nice Work Champ!"
    : "Get Out Now!";
}

//  IS THIS MY TAIL KYU 8
function correctTail(body, tail) {
  let sub = body.slice(-1);
  return sub === tail;
}

//  HEAD, TAIL, INIT, AND LAST  KYU 7
/*
    head: first element
    tail: all after first element
    init: all except last element
    last: last element
psuedo: create 4 functions... use slice
*/

const head = (arr) => arr.slice(0, 1)[0]; //  console.log(head([1,2,3,4,5])); //  1
const tail = (arr) => arr.slice(1); //  console.log(tail([1,2,3,4,5])); //  [2,3,4,5]
const init = (arr) => arr.slice(0, arr.length - 1); //  console.log(init([1,2,3,4,5])); //  [1,2,3,4]
const last = (arr) => arr.slice(-1)[0]; //  console.log(last([1,2,3,4,5])); //  5

function reduce(fraction) {
  let numerator = fraction[0];
  let denominator = fraction[1];
  if (numerator === 1 || denominator === 1) return [numerator,denominator];
  const getGCD = (numerator, denominator) =>
    denominator ? getGCD(denominator, numerator % denominator) : numerator;
  const gcd = getGCD(numerator, denominator);

  return [numerator / gcd, denominator / gcd];
}

console.log(reduce([45, 120])); //  [3,8]
