//  Disemvowel Trolls KYU 7
//  Parmeters:  given a string
//  Return:  string without vowels
//  Example:
console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"

//  PseudoCode:
//  create an array of vowels to check against
//  split input str into an array of letters
// filter if  letter(to lower) is a letter..
// return joined str

function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter((e) => !vowels.includes(e.toLowerCase()))
    .join("");
}
