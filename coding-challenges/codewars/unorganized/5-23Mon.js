function twoHighest(arr) {
  let result = new Map(arr);
  return result.size;
}
console.log(twoHighest([1, 1, 1]));
console.log(twoHighest([10, 5, 2, 8]));
