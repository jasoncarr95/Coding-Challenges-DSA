function linearSearch(array, key) {
  // returns index of target if found, else returns -1 if not found
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }
  return -1;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = linearSearch(numbers, 12); // -1
