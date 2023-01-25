//  Strings: swap vowels' case      KYU 7
// input is a string -may be empty.. vowels = "aeiouAEIOU"
// return a copy of the string with the vowels' case swapped

// console.log(swapVowelCase("C is alive!")); //  "C Is AlIvE"
// console.log(swapVowelCase(" ")); //  " "
// console.log(swapVowelCase("The")); //  "ThE"
/* PSUEDO
        - dont have to check if empty really?
        - do i have to make sure I copy the string first so it isnt mutated?

        - split string into an array of chars
        - check if each char is a vowel
        - if vowel, swap case
        - if not vowel, stay same
        - return joined arr as a string
    */
function swapVowelCase(str) {
  const vowels = "aeiouAEIOU".split("");

  let result = str.split("").map(function (e) {
    if (vowels.includes(e)) {
      return e.toUpperCase() != e.toLowerCase() && e != e.toLowerCase()
        ? e.toLowerCase()
        : e.toUpperCase();
    } else return e;
  });

  return result.join("");
}

// .map(function (e) {
//     return e.toUpperCase() != e.toLowerCase() && e != e.toLowerCase()
//       ? e.toLowerCase()
//       : e.toUpperCase();
//   })

//  Generate range of integers      KYU 8
// generates range of integers from min to max with the step
// INPUT: min,max, step
// min <max...step>0...range doesnt have to include max (depending on step)
// return as an array
// console.log(generateRange(2, 10, 2)); //  [2,4,6,8,10]
// console.log(generateRange(1, 10, 3)); //  [1,4,7,10]

function generateRange(min, max, step) {
  //  create an array to store the result
  let result = [];
  // for loop... starting at min, ending at max.. incrementing by step..... push to result
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}

//  Multiply array values and filter non-numeric  KYU 7
// input  2 args... sequence of values and a multiplier
// output  filter out non-numeric values... multiple the rest by the multiplier

// console.log(multiplyAndFilter([1, 2, 3, 4], 1.5)); //  [1.5,3,4.5,6]
// console.log(multiplyAndFilter([1, null, function () {}, 69], 2)); //  [2,138]

function multiplyAndFilter(array, multiplier) {
  // first filter the array so it only contains numbers
  let result = array.filter((e) => typeof e === "number");
  // map.. multiple elements left in array by multiplier, return
  return result.map((e) => e * multiplier);
}

//  Correct the mistakes of the character recognition software  KYU 8
//  correct following: 5-->S, 0-->O, 1-->I
// console.log(correct("L0ND0N")); // "LONDON"
// console.log(correct("DUBL1N")); //  "DUBLIN"

function correct(string) {
  if (typeof String.prototype.replaceAll === "undefined") {
    String.prototype.replaceAll = function (match, replace) {
      return this.replace(new RegExp(match, "g"), () => replace);
    };
  }
  let result = string
    .replaceAll("0", "O")
    .replaceAll("1", "I")
    .replaceAll("5", "S");
  return result;
}

//  WELCOME     KYU 8
//  input: param is a language (always a string)
// output: return a greeting from database... if langauage not in DB, or input is invalid, default to english

console.log(greet("english")); // "Welcome"
console.log(greet("dutch")); // "Welkom"
console.log(greet("IP_ADDRESS_INVALID")); // "Welcome"

const db = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};
function greet(language) {
  return db[language] || db["english"];
}
