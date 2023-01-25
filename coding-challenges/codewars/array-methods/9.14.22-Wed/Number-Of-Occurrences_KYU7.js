/*
return number of occurences of an element in an array
    - check if arr includes the given element.. if not return 0
    - if yes, filter arr to only element, then return that length
*/

Array.prototype.numberOfOccurrences = function (element) {
  if (!this.includes(element)) return 0;
  else return this.filter((e) => e === element).length;
};

const arr = [0, 1, 2, 2, 3];
console.log(arr.numberOfOccurrences(0)); // 1
console.log(arr.numberOfOccurrences(4)); // 0
console.log(arr.numberOfOccurrences(2)); // 2
console.log(arr.numberOfOccurrences("a")); // 0
