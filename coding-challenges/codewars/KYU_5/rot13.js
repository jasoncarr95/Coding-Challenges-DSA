// input: always a string, could be empty,.. could have numbers or specials chars
// maintain char case? (upper => Upper)
// 13 letters after

//~~~ PSEUDO
// split str into arr of chars
// map => iterate through arr, check if char==letter (if not stays same)
// if letter, replace it with letter +13 spots
// max charCode for end of alphabet.. start w/ a
// return as a str

// a = 97, z = 122
// A = 65, Z = 90

function rot13(message) {
  let chars = message.split("");
  const isLetter = (char) => char.toUpperCase() !== char.toLowerCase();
  return chars
    .map((char) => {
      if (!isLetter(char)) return char;
      const newCharCode = char.charCodeAt() + 13;
      // UPPERCASE
      if (char.charCodeAt() <= 90) {
        return newCharCode <= 90
          ? String.fromCharCode(newCharCode)
          : String.fromCharCode(64 + (newCharCode - 90));
      }

      if (newCharCode <= 122) return String.fromCharCode(newCharCode);
      const diff = newCharCode - 122;
      return String.fromCharCode(96 + diff);
    })
    .join("");
}

console.log(rot13("abc"), "=>", "nop"); // a=1 => 14
console.log(rot13("xyz"), "=>", "klm"); // 120,121,122 => 107,108,109
console.log(rot13("XYZ"), "=>", "KLM");
// 122 + 13 = 135
// 97 + diff (newCharCode - 122)
console.log(rot13("Abc"), "=>", "Nop");
console.log(rot13("abc 90, $ xyz"), "=>", "nop 90, $ klm");

// console.log(rot13("abcABC"));
// console.log(rot13("xyzXYZ"));
