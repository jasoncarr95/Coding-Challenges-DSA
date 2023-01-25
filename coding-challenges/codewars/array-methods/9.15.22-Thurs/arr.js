/*
input: object array 

sort them in descending order based on sortBy
*/

function sortList(sortBy, list) {
  return list.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    else if (b[sortBy] < a[sortBy]) return 1;
    return 0;
  });
}

let obj = [
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
];
console.log(sortList("a", obj));
//[
//     {"a": 4, "b": 12},
//     {"a": 3, "b": 2},
//     {"a": 2, "b": 40},
//     {"a": 1, "b": 3}
//   ]

console.log(obj["a"]);
