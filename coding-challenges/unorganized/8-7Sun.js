//  Difference of Volumes of Cuboids   KYU 8
//  Parmeters: 2 lists of integers .. each list will be 3 positive int above 0, represendint dients of a cube
//  Return:
// find difference in volume
//  Example:
// console.log(findDifference([2,2,3],[5,4,1]))    // a=12, b=20 --> 8

//  PseudoCode:
//  find volume of each a and vol b
// since given arrays, use the reduce
// subtract those reduced sums
// return the math.abs
function findDifference(a, b) {
  return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));
}

//  Bumps in the road   KYU 7
//  Parmeters: given string with eitherflat road "_" or bumps "n"
//  Return:   if bumps <= 15, gucci
//  Example:
    // console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); // "Car Dead"
    // console.log(bump("n")); // "Woohoo!"

//  PseudoCode:
// split the str into an array of characters
// filter array so it only contains n
// reduce for sum bumps
// condtiotional to determine whats returned

function bump(x) {
  let bumps = x.split("").filter((char) => char === "n");

  return bumps.length <= 15 ? "Woohoo!" : "Car Dead";
}

