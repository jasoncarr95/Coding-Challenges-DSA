//  SUMMY KYU 7
/*  PREP
notes: function(string) => sum of integers
Parameters: string of integers separated by a space ... idk if floats or negative 
Return: one number => the sum of the integers (is returned no logged or anything)
*/
//Example:
//  (summy('1 2 3'))  // 6
//  (summy('1 2 3 4'))    // 10
//Pseudocode: split  string=>array of integers (need to parseInt), reduce that into a sum which is returned
function summy(stringOfInts) {
  return stringOfInts
    .split(" ")
    .map((e) => parseInt(e))
    .reduce((a, b) => a + b, 0);
}

//  --------------

//  BAND NAME GENERATOR     KYU 7
// PARAM:   given a string (noun)
// RETURN:  `The Noun` (capital first letter) or `The Nounnoun`
// EXAMPLE:
//console.log(bandNameGenerator('knife')) // 'The Knife'
//console.log(bandNameGenerator('tart'))   // 'Tartart'
// PSEUDO:  check if (noun) starts and ends with same letter str.endsWith(str.charAt(0)
// conditional.. if true then return str+str.slice(1)

function bandNameGenerator(str) {
  if (str.endsWith(str.charAt(0))) {
    return `${str[0].toUpperCase()}${str.slice(1)}${str.slice(1)}`;
  } else return `The ${str[0].toUpperCase()}${str.slice(1)}`;
}

//  --------------------------

//  ABSENT VOWEL    KYU 7
/*  PREP
        PARAM: given a string with all vowels except one
        RETURN: index of the given vowel that is missing
        EXAMPLE: 
        PSEUDO  create an array of vowels, forEach loop... conditional if vowel isnt included in string then return index
    */
