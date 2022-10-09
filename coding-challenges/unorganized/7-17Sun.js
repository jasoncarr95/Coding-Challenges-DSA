//  INSERT DASHES   KYU 7
//  insert dash '-' between each 2 odd digits in a num

/*  - input will always be a non-negative number... >= 0
        - output is a string ???

        PSUEDO:
        - split num into an array
        - loop through array... if 2 elements next to eachother are odd, add a dash in between
        - join the array and return as a string
    */
// console.log(insertDash(454793)); //  4547-9-3
// console.log(insertDash(123456)); //  123456
// console.log(insertDash(1003567)); //  1003-567

function insertDash(num) {
  if (num === 0) return 0;
  let digits = num.toString().split("");
  return digits
    .map(function (e, i) {
      if (e % 2 != 0 && digits[i + 1] && digits[i + 1] % 2 != 0) {
        return (e = e + "-");
      } else return e;
    })
    .join("");
}

//  CASE SWAPPING   KYU 7
//  input is a string (may be empty)
// swap case for each letter in the string, and return new string

//  console.log(swap("CodeWars")); //  "cODEwARS"
//  console.log(swap("12345")); //  "12345"

function swap(str) {
  if (str.length < 1) return "";
  // without using REGEX
  // split str into an array of chars
  let chars = str.split("");
  // test if char is an upper case or lowercase letter
  // if so, replace with opposite
  return (
    chars
      .map(function (e) {
        return e.toUpperCase() != e.toLowerCase() && e != e.toLowerCase()
          ? e.toLowerCase()
          : e.toUpperCase();
      })
      // return joined arr as a str
      .join("")
  );
}

//  altERnaTIng cAsE <=> ALTerNAtiNG CaSe   KYU 8
//  lowerCase letters become upper and vice versa
String.prototype.toAlternatingCase = function () {
  let chars = this.split("");
  return chars
    .map((e) => {
      return e != e.toUpperCase() && e.toUpperCase() != e.toLowerCase()
        ? e.toUpperCase()
        : e.toLowerCase();
    })
    .join("");
};
// console.log("hello world".toAlternatingCase()); //  "HELLO WORLD"
// console.log("CodeWars".toAlternatingCase()); //  "cODEwARS"
// console.log("12345".toAlternatingCase()); //  "12345"

//  Insert Dashes 2     KYU 7
//  insert dash '-' between each 2 odd numbers and asterik '*' between each 2 even
// zero is neither even or odd
// return as a string
        // console.log(insertDashII(454793)); //  "4547-9-3"
        // console.log(insertDashII(123456)); //  "123456"
        // console.log(insertDashII(40546793)); //  "4054*67-9-3"
        // console.log(insertDashII(0));

function insertDashII(num) {
  const isEven = (x) => x % 2 == 0 && x != 0;
  const isOdd = (x) => x % 2 != 0;

  let digits = num
    .toString()
    .split("")
    .map((e) => Number(e));

  return digits
    .map((e, i) => {
      if (isEven(e) && isEven(digits[i + 1]) && digits[i + 1]) return e + "*";
      else if (isOdd(e) && isOdd(digits[i + 1]) && digits[i + 1])
        return e + "-";
      else return e;
    })
    .join("");
}
