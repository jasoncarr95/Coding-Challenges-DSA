// ** EVEN NUMBERS IN AN ARRAY
// function evenNumbers(array, number) {
//     let evens = array.filter((num) => num%2==0)
//     return evens.slice(-number)
// }

//   console.log( evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) ); //[4,6,8]
//   console.log( evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) ); // [-8,26]

// ** TOTAL AMOUNT OF POINTS
function points(games) {
  let score = 0;
  games.forEach((game) =>
    game[0] > game[2]
      ? (score += 3)
      : game[0] == game[2]
        ? (score += 1)
        : (score += 0),
  );
  return score;
}
console.log(
  points([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ]),
); //30
console.log(
  points([
    "1:1",
    "2:2",
    "3:3",
    "4:4",
    "2:2",
    "3:3",
    "4:4",
    "3:3",
    "4:4",
    "4:4",
  ]),
); //10
