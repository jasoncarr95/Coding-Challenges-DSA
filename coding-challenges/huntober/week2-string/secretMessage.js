let secretMessage =
  "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs";

// Day 1 - calculator fix
function repairString(str) {
  const repairObject = {
    0: "O",
    5: "S",
    1: "I",
    6: "G",
    2: "Z",
    7: "L",
    3: "E",
    8: "B",
    4: "h",
    9: "q",
    O: "0",
    S: "5",
    I: "1",
    G: "6",
    Z: "2",
    L: "7",
    E: "3",
    B: "8",
    h: "4",
    q: "9",
  };

  const replaceChar = (char) => repairObject[char];

  return str
    .split("")
    .map((char) => (repairObject[char] ? replaceChar(char) : char))
    .join("");
}

secretMessage = repairString(secretMessage);
// console.log(secretMessage); // "e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs"

//Day 2/3 - add spaces using day2 key (key="Space")
function replaceCharsWithSpace(str, keys = ["S", "p", "a", "c", "e"]) {
  return str
    .split("")
    .map((char) => (keys.includes(char) ? " " : char))
    .join("");
}

secretMessage = replaceCharsWithSpace(secretMessage);
// console.log(secretMessage); // "!!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs"

// Day4 - Reverse String

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
secretMessage = reverseString(secretMessage);
// console.log(secretMessage); // "sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!!"

// Day5/6 remove chars at Xth index
const removeXthCharacter = (str, x) => {
  let newStr = str
    .split("")
    .map((char, index) => {
      return (index + 1) % x === 0 ? "" : char;
    })
    .join("");
  return newStr;
};
secretMessage = removeXthCharacter(secretMessage, 3);
// console.log(secretMessage)  // sfmglyvi 1 DVVP WLDM. #100wVEH dv tl tvg!!

// DAY 7 LAST DAYYYY
const swapLettersForOpposite = function (str) {
  const checkIfLetter = (char) => {
    return char.toUpperCase() !== char.toLowerCase();
  };
  const isUpperCase = (char) => {
    return char === char.toUpperCase();
  };
  const switchLetterCase = (char) => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else return char.toUpperCase();
  };
  const swapLetterPosition = (char) => {
    // gets position of alphabet 1 - 26
    // gets position of alphabet 1 - 26
    let originalPosition = isUpperCase(char)
      ? char.charCodeAt() - 64
      : char.charCodeAt() - 96;
    let newPosition = Math.abs(originalPosition - 27);
    // console.log(newPosition);
    return isUpperCase(char)
      ? String.fromCharCode(newPosition + 64)
      : String.fromCharCode(newPosition + 96);
  };
  let newStr = str
    .split("")
    .map((char, index) => {
      if (!checkIfLetter(char)) return char;
      else {
        let newLetter = switchLetterCase(char);
        return swapLetterPosition(newLetter);
      }
    })
    .join("");
  return newStr;
};
secretMessage = swapLettersForOpposite(secretMessage);
console.log(`\n ${secretMessage}\n \n \n \n \n \n `);

// HUNTOBER 1 week down. #100Devs WE GO GET!!
