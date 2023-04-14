//  ARRAY HAS TO BE SORTED FIRST

function binarySearch(array, key) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (array[mid] === key) {
      return mid;
    }
    if (array[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(numbers, 1));
console.log(binarySearch(numbers, 10));
console.log(binarySearch(numbers, 4));
// console.log(numbers.length);
console.log(binarySearch(numbers, 5));
console.log(binarySearch(numbers, 12));

console.log("\n~~~~~~~~\n");
numbers = [1, 4, 5];
console.log(binarySearch(numbers, 4));
console.log(binarySearch(numbers, 12));
