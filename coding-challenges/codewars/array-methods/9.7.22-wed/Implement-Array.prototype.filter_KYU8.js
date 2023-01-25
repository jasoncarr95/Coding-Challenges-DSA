Array.prototype.filter = function (func) {
  let inputArr = this;
  let result = [];

  let filtered = inputArr.map((el) => func(el));
  filtered.forEach((el, index) => {
    if (el) {
      result.push(inputArr[index]);
    }
  });
  return result;
};

console.log([1, 2, 3, 4, 5].filter((num) => num > 3)); // [4,5]
