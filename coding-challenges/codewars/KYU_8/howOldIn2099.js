// work with dates in both past & future
// Provide output in this format:
//  For dates in the future:    "You are ... year(s) old."
// For dates in the past:   "You will be born in ... year(s)."
// If the year of birth equals the year requested return:   "You were born this very year!"

// account for both year & years answer

/*  PSEUDO
    - check birthYear & yearToCalc.. dont have to validate input??
    -  check if birthYear is < or > or == calcYear
        - branch conditional based on that
        - check if diff between years is > 1
*/

function calculateAge(birthYear, yearToCalcAge) {
  const diff = yearToCalcAge - birthYear;
  if (diff === 0) return "You were born this very year!";
  if (diff === -1) return `You will be born in ${Math.abs(diff)} year.`;
  if (diff < -1) return `You will be born in ${Math.abs(diff)} years.`;
  if (diff > 1) return `You are ${diff} years old.`;
  if (diff == 1) return `You are ${diff} year old.`;
}

console.log(calculateAge(2012, 2016), "You are 4 years old.");
console.log(calculateAge(1989, 2016), "You are 27 years old.");
console.log(calculateAge(2000, 2090), "You are 90 years old.");
console.log(calculateAge(2000, 1990), "You will be born in 10 years.");
console.log(calculateAge(3400, 3400), "You were born this very year!");
console.log(calculateAge(900, 2900), "You are 2000 years old.");
console.log(calculateAge(2010, 1990), "You will be born in 20 years.");
console.log(calculateAge(2010, 1500), "You will be born in 510 years.");
console.log(calculateAge(2011, 2012), "You are 1 year old.");
console.log(calculateAge(2000, 1999), "You will be born in 1 year.");
