/*  Day 6 (from Thurs 10/6) Completed Fri 10/7


    PARAM: string & positive integer
    RETURN: strong

    when given non-empty string, and positive integer X:
    - remove every Xth character from the string
    - start counting from first element (1 based index)

    Example: 
        // For the string below and 4
        "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
        // remove decoy strings
        "This is Halloween! This is Halloween!"

    PSEUDO:
        - split str into arr
        - filter arr based on index (1 based)
        - return joined as string
*/

const removeXthCharacter = (str, x) => {
  let newStr = str
    .split("")
    .map((char, index) => {
      return (index + 1) % x === 0 ? "" : char;
    })
    .join("");
  return newStr;
};

// For the string below and 4
// console.log(
//     removeXthCharacter("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!")
// );

// remove decoy strings
("This is Halloween! This is Halloween!");

// For the string below and 5
// console.log(
//     removeXthCharacter("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.")
// );

// remove decoy strings and preach 🙌
("The Bachelor is a terrible television show.");

// const remove = (char) => char = ""

// let y = "yo"
// console.log(remove(y))
// console.log(y)

console.log(
  removeXthCharacter("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4)
);
