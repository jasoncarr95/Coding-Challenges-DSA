function convertHashToArray(hash) {
  const arr = Object.entries(hash);

  return arr.sort((a, b) => a[0].localeCompare(b[0]));
}

console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
); // [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
