//  What's The real Floor?   KYU 8
//  Parmeters:  given an integer
//  Return: return the floor
// 1st = 0 (ground)
// no 13th.. numbers above 1st = -1 above 13 = -2
//  Example:
//  console.log(getRealFloor(1))    // 0
//  console.log(getRealFloor(5))    // 4
//  console.log(getRealFloor(15))    // 13
//  PseudoCode:
// check floor number .. if <= 0 , return n
//  if between 1 and 13(up to 12), return n-1
// if above 13, return n-2
function getRealFloor(n) {
  return n <= 0 ? n : n < 13 ? n - 1 : n - 2;
}

//  Century from year   KYU 8
//  Parmeters:  given a year (integer)
//  Return: return the century
//  Example:
//  console.log(century(1705)); // 18
//  console.log(century(1900)); // 19
//  console.log(century(89));   // 1

//  PseudoCode:
// 1st century = 1-100
// 2nd centur = 101-200
function century(year) {
  // Finish this :)
  return Math.ceil(year / 100);
}

//  TITLE   KYU #
//  Parmeters:
//  Return:
//  Example:
//  PseudoCode:
//

// function greet(language){
//     const welcome = {
//         english: 'Welcome',
//         czech: 'Vitejte',
//         danish: 'Velkomst',
//         dutch: 'Welkom',
//         estonian: 'Tere tulemast',
//         finnish: 'Tervetuloa',
//         flemish: 'Welgekomen',
//         french: 'Bienvenue',
//         german: 'Willkommen',
//         irish: 'Failte',
//         italian: 'Benvenuto',
//         latvian: 'Gaidits',
//         lithuanian: 'Laukiamas',
//         polish: 'Witamy',
//         spanish: 'Bienvenido',
//         swedish: 'Valkommen',
//         welsh: 'Croeso',

//         greet: function(language){
//             return this.language
//         }
//     }
// }
// console.log(greet(english));

//  SPEEDCODE #2 ARRAY MADNESS   KYU 8
//  Parmeters:  given 2 arrays
//  Return: return a boolean
//  Example:
//  console.log(arrayMadness([4, 5, 6], [1, 2, 3]));    // true

//  PseudoCode:

function arrayMadness(a, b) {
  const aSumSquares = a.map((e) => e ** 2).reduce((a, b) => a + b);
  const bSumCubes = b.map((e) => e ** 3).reduce((a, b) => a + b);
  return aSumSquares > bSumCubes;
}

//  ARRAY ARRAY ARRAY   KYU 7
// if both  numbers, score is sum of those numbers
// only 1 number, score is that number
// neither number, return void
//  Parmeters:  given 2 values in an array (values could be numbers or not)
//  Return: either 'Void!'   or return an array of arrays..each sub array is the same as x.. number of sub arrays= score
//  Example:
//  console.log(explode(["a", 0])); // []
//  console.log(explode(["a", 3])); //  [['a',3],['a',3],['a',3]]
//  console.log(explode(["a", "b"])); //  'Void!
//  console.log(explode([3,2]));

//  PseudoCode:
// first check if values are numbers... if neither return void, if both sum, if one that one
// then for loop... for score number of iterations, result[].push x

function explode(x){
    const numbers = x.filter(e=> typeof e == 'number')
    console.log(`nums ${numbers}`);
    
    const score = numbers.reduce((a,b)=>a+b,0)
    if(numbers.length==0) return 'Void!'
    else {
        const result = []
        for(let i = 1; i<= score; i++){
            result.push(x)
        }
        return result
    }
}

//  REMOVE THE MINIMUM   KYU 7
//  Parmeters: given an array of integers... array may be empty
//  Return: DO NOT MUTATE ORIGINAL ARRAY... remove smallest value (one w lower index if multiple same)... dont change order of elements left
//  Example:

//  PseudoCode:
        //  find the smallest item in the array, remove that item and return the array
        // Math.min(...arr)<= will that remove multiple if they are the same??
function removeSmallest(numbers) {
    const indexRemove =numbers.indexOf(Math.min(...numbers))
    const result = numbers.slice()
    result.splice(indexRemove,1)
    return result
}
(removeSmallest([5,3,2,1,4]));   //  [5,3,2,4]
(removeSmallest([2,2,1,2,1]));   //  [2,2,2,1]