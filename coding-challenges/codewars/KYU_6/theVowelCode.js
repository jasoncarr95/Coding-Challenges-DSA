/*
encode: replace all lowercase vowels with a number (dont worry about upperCase)

decode: turn numbers back into letters (all numbers will correspond to vowels)

    input: 
    output:
*/
/*  PSEUDO
        - create objects to "map" values switched to
        - split strings into arrays
        - check if each char is one of our maps keys
            - if so replace with new value
        - return joined back as a string
*/

function encode(string) {
  const swapMap = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return string
    .split("")
    .map((char) =>
      Object.keys(swapMap).includes(char) ? (char = swapMap[char]) : char
    )
    .join("");
}

function decode(string) {
  const swapMap = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  return string
    .split("")
    .map((char) =>
      Object.keys(swapMap).includes(char) ? (char = swapMap[char]) : char
    )
    .join("");
}

console.log(encode("hello")); //  "h2ll4"
console.log(decode("h3 th2r2")); // "hi there"
