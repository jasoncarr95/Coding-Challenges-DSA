// get character from ASCII Value   KYU 8
//  console.log(getChar(65));   // "A"
function getChar(c) {
  return String.fromCharCode(c);
}

//  Grasshopper-Debug (celsius converter)   KYU 8
//  console.log(weatherInfo(50));
function weatherInfo(temp) {
  let c = convertToCelsius(temp);

  function convertToCelsius(temperature) {
    return (temperature - 32) * (5 / 9);
  }
  if (c > 0) return c + " is above freezing temperature";
  else return c + " is freezing temperature";
}

//  Remove First and Last Character Part 2   KYU 7
//  given a string containing CSV
//  return new string -- without first and last char.
//  now separated by spaces
//  if empty or < 3, return empty value (NULL)
//  Example:
//  console.log(array("1,2,3"));    //  "2"
//  console.log(array("1,2,3,4,5"));    //  "2 3 4"
//  console.log(array("1"));

//  PseudoCode:
/*  - split str into arr (by ,)
            - push and pop
            - join by space
        */
function array(str) {
  let arr = str.split(",");
  if (arr.length < 3) return null;
  arr.pop();
  arr.shift();
  return arr.join(" ");
}

//  Find the nth Digit of a Number   KYU 7
//  Return: return nth digit of num (counting from right to left)
//  if num is negative, ignore and treat as positive
//  if nth is not positive, return -1
//  42 = 00042 --> (45,5)--> 0
//  Example:
// console.log(findDigit(5673, 4)); //  5
// console.log(findDigit(129, 2)); //  2
// console.log(findDigit(-2825, 3)); //  8
// console.log(findDigit(65, 0)); //  -1
// console.log(findDigit(-456, 4)); //  0
//  PseudoCode:
/*  1. get digits --> split num
            2. checks
                - num = Abs(num)
                nth <= 0 return -1
                nth > numDigits return 0

        arr.slice(-2).slice(0,1)
        */

function findDigit(num, nth) {
  let numDigits = Math.abs(num).toString().split("");
  if (nth <= 0) return -1;
  else if (nth > numDigits.length) return 0;
  else {
    console.log(numDigits);
    return Number(numDigits.slice(-nth)[0]);
  }
}
