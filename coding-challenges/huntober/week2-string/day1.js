/*  Day 1 (from Saturday 10/1) Completed Tues 10/4

    Similar numbers/letters mixed up 
    (both directions, case-sensitive)
    '0' : 'O',      '5' : 'S',
    '1' : 'I',      '6' : 'G',
    '2' : 'Z',      '7' : 'L',
    '3' : 'E',      '8' : 'B',
    '4' : 'h',      '9' : 'q',


    PREP
    PARAM:  non-empty string
    RETURN: fixed string
    EXAMPLE:
    PSEUDO:
        - split string into array of chars
        - iterate over arr of chars, check if char is bad.. if so, replace
        - use object to "map/replace" bad values with good ones


*/

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

console.log(repairString("O"));

console.log(repairString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")); // "PRO-TIP #498: IT'S NICE TO SAY HELLO.";
console.log(
  repairString(
    "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
  )
);
