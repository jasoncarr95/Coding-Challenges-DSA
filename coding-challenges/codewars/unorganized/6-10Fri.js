//  The Robber Language   KYU 7
//  Parmeters:  given a string.. sentences ASCII characters between 32-126... length 0-255
//  Return:     return the converted string
//  consonants are duplicated, with an 'o' inserted in between them... vowels left untouched

//  Example:
//  console.log(robberEncode('foo bar'));   //  'fofoo bobaror'

//  PseudoCode:
// create an array of vowels to check against (both upper and lowercase)
// convert sentence into an array
// loop through sentence.. if the element(letter) is included in the vowel arr, map that element to being e=> eoe
// join new array and return

// function robberEncode(sentence) {
//     let consonants = "BCDFGHJKLMNPQRSTVWXYZ"
//     consonants = consonants.concat(consonants.toLowerCase()).split('')
//     console.log(consonants);

//     let result = sentence.split('')

//     for(let i=0; i < result.length; i++){
//         if(consonants.includes(result[i])){
//              result[i] = `${result[i]}o${result[i]}`
//         }
//     } return result.join('')
// }

//  Welcome to the City     KYU 8
function sayHello(name, city, state) {
  let names = name.join(" ");
  return `Hello, ${names}! Welcome to ${city}, ${state}!`;
}

//  Determine offspring sex based on genes XX and XY chromosomes    KYU 8
function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;
}
