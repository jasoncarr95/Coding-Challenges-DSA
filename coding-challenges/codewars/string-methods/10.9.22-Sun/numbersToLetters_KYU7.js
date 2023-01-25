// Numbers to Letters KYU 7
/*
numbers given correspond to alphabet position in reverse order
     a = 26, z=1
    '!'=27, "?"=28, "' '"= "29"


    input: array of numbers (in string form)
    output: string
*/
/*  PSEUDO
        - may each arr element to an actual num (not string form)
        - then map, switch the element with String.fromCharCode of opposite element
        - if 27,28,29 switch with other chars
        - return as string
*/

function switcher(x) {
  const charMap = {
    27: "!",
    28: "?",
    29: " ",
  };

  let nums = x.map((char) => Number(char));

  return nums
    .map((num) => {
      return num in charMap
        ? charMap[num]
        : String.fromCharCode(Math.abs(num - 27) + 96);
    })
    .join("");
}

console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"]));
// "codewars"

console.log(switcher(["4", "24"])); // "wc"

console.log(switcher(["4", "24", "27", "28", "29"])); // "wc"

console.log(
  switcher([
    "25",
    "7",
    "8",
    "4",
    "14",
    "23",
    "8",
    "25",
    "23",
    "29",
    "16",
    "16",
    "4",
  ])
);
// 'btswmdsbd kkw'
