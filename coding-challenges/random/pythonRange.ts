/**
 *
 * @param {number} start start of range (incusive)
 * @param {number} stop end of range (inclusive)
 * @param {number} increment how much to increment by
 * @returns {number[]} array generated
 */
function range(start: number, stop: number, increment?: number): number[] {
  const arr: number[] = [];

  for (let i = start; i <= stop; i += increment || 1) {
    arr.push(i);
  }

  return arr;
}

console.log(range(0, 5)); // [0, 1, 2, 3, 4, 5]
console.log(range(3, 9, 3)); // [3, 6, 9]
console.log(range(10, 50, 10)); // [10, 20, 30, 40, 50]
