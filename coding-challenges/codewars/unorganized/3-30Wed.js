// ** WED. 3.30.2022

// Return an array
function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    i % 3 == 0 && i % 5 == 0
      ? arr.push("fizzbuzz")
      : i % 3 == 0
        ? arr.push("fizz")
        : i % 5 == 0
          ? arr.push("buzz")
          : arr.push(i);
  }
  return arr;
}
console.log(fizzbuzz(25));

//sorted? yes? no? how?
function isSortedAndHow(array) {
  return array === array.sort((a, b) => a - b)
    ? "yes, ascending"
    : array === array.sort((a, b) => b - a)
      ? "yes, descending"
      : "no";
}

function isSortedAndHow(array) {
  let ascending = array.slice().sort((a, b) => a - b);
  let descending = array.slice().sort((a, b) => b - a);

  console.log(array);
  console.log(ascending);
  console.log(descending);

  console.log(array == descending ? "yes" : "no");
}
isSortedAndHow([1, 2]);

function isSortedAndHow(array) {
  let ascending = array.slice().sort((a, b) => a - b);
  let descending = array.slice().sort((a, b) => b - a);

  return array.toString() == ascending.toString()
    ? "yes, ascending"
    : array.toString() == descending.toString()
      ? "yes, descending"
      : "no";
}

console.log(isSortedAndHow([1, 2])); //'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])); // 'yes, descending'
console.log(isSortedAndHow([4, 2, 30])); //'no'
