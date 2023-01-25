//  Mumbling   KYU 7
//  Parmeters:  given a string... only will include letters A-Z/a-z
//  Return:
//  Example:
//  console.log(accum("abcd")); //  "A-Bb-Ccc-Dddd"
//  console.log(accum("RqaEzty"));  //  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//  PseudoCode:
// captalize each letter, then based on its index, add that many lowercase versions of that letter to it (0 based index)

//  split to array of strings (by letter)
// make each element uppercase
// loop through arr... based on index, concat that manhy lowercase letters
// join as string by - and return
function accum(s) {
  let letters = s.toUpperCase().split("");
  return letters
    .map((e, i) => {
      return (e += e.toLowerCase().repeat(i));
    })
    .join("-");
}

//  Highest Scoring Word   KYU 6
//  each letter is worth points based on position in alphabet (i.e a=1)
//  Parmeters:  given a string of words  -- all inputs will be lowercase and valid
//  Return: return a string --the highest scoring word.. if scores are the same, return word that appears first
//  Example:
//  console.log(high('aa b'));  //  'aa
//  console.log(high('take me to semynak'));    // "semynak"

//  PseudoCode:
/*  1. need the score for each word (score is gonna be each letter.charCodeAt()-96)
            // first split string into an array of words
        2. use map... each word --> split each word into its letters... replace each letter with its score.. reduce the letter scores into a score for each word.

        3. get highest scoring word... indexOf(Math.max) .. return indexOf original string
    */

function high(x) {
  function score(word) {
    return word
      .split("")
      .map((e) => e.charCodeAt() - 96)
      .reduce((a, b) => a + b, 0);
  }

  let words = x.split(" ");

  let wordScore = words.map((e) => score(e));
  return words[wordScore.indexOf(Math.max(...wordScore))];
}

//  Fix My Phone Numbers!   KYU 7
//  phone number = string of 11digits ... i.e "02078834982"/.. must always start w 0
// numbers contain random characters/white space, some arent phone numbers .. i.e "02078834982"=> "efRFS:)0207ERGQREG88349F82!"

// decide if it contains a valid phone number.. if so, return the corrected number as a string.. if not return "Not a phone number"

//  Parmeters:  given a string, which may or may not contain a phone number..
// if it does contain a phone number, will the 0 be the correct space? .. is the phone number's order messed up as well?
// ** do i need to verify if it contains a 0, or starts with  a 0??
//  Example:
//  console.log(isItANum("efRFS:)0207ERGQREG88349F82!"));   //  "02078834982"
//  console.log(isItANum("0192387415456")); //  "Not a phone number"    --> >11 nums
//  PseudoCode:
// check if the string contains 11 digits
// split str into an arr.. filter it by numbers
//  is a phone number if its 11 digits
//  *** start w a 0??

function isItANum(str) {
  let nums = str
    .split("")
    .filter((e) => e === "0" || Number(e))
    .join("");
  return nums.length === 11 && nums.startsWith("0")
    ? nums
    : "Not a phone number";
}

//  Sum two arrays   KYU 6
/* take 2 arrays consiting of integers, return the sum of those 2 arrays
 *   [3,2,9] --> '3'+'2'+'9' -->  329
 *   return an array of the sum similar to the input format ... i.e if sum is 341 return [3,4,1] (integers)
 *   if both arrays empty, return an empty array
 *   if first num in arr is negative, treat whole number as a negative i.e. [-7,2,2,8] --> -7228
 */
//  Example:
console.log(addArrays([3, 2, 9], [1, 2])); //  329 + 12 = 341 --> [3,4,1]
console.log(addArrays([4, 7, 3], [1, 2, 3])); //  [5,9,6]
console.log(addArrays([1], [5, 7, 6])); //  [5,7,7]
console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8])); //  [-3,9,6,2]

//  PseudoCode:
/*  *   if both empty, return an empty array
 *       check if first number is a negative.. if so, turn num to negative
 *   turn each array into one number ... join [3,2,9]--> Number(329)
 *   add those numbers
 *   split sum into an array.. but make sure each element is a number
 */

function addArrays(array1, array2) {
  if (array1.length < 1 && array2.length < 1) {
    return [];
  } else if (array1.length < 1) {
    return array2;
  } else if (array2.length < 1) {
    return array1;
  }

  let arrayToNumber1 = parseInt(array1.join(""));
  let arrayToNumber2 = parseInt(array2.join(""));
  let sum = arrayToNumber1 + arrayToNumber2;
  let arrSum = sum
    .toString()
    .split("")
    .filter((e) => Number(e) || e === "0")
    .map((e) => Number(e));

  if (sum < 0) {
    arrSum[0] *= -1;
  }
  return arrSum;
}
console.log(addArrays([1, 0], [1, 0])); //  [2,0]

console.log(addArrays([], [2]));
console.log(addArrays([1], []));

/*  LESSONS:
 *   didnt check for edge cases... if one or both of arrs was empty
 *   for some reason map => Number('0') returns nothing??  -- doesnt return 0 ???
 */
