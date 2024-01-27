// number of times must multiple digits in num
// until reach a single digit

export function persistence(num: number, count = 0): number {
  let digits = String(num)
    .split("")
    .map((x) => Number(x));

  if (digits.length === 1) return count;
  else {
    count++;
    let newNum = digits.reduce((acc, curr) => acc * curr);
    return persistence(newNum, count);
  }
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum); // Outputs: 15
