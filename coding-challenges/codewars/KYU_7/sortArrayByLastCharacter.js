// @ts-check
/**
 * sort array by last character.. ints before letters.. not case sens.
 * @param {array} arr array of integers or strings
 * @return {array}
 */
// function sortMe(arr) {
//     return arr.sort((a, b) => {
//         console.log(a[a.length - 1], b[b.length - 1]);
//         return a[a.length - 1].localeCompare(b[b.length - 1]);
//     });
// }
// (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)

function sortMe(arr) {
  return [...arr].sort((a, b) => {
    const [x, y] = [a.toString().slice(-1), b.toString().slice(-1)];
    if (x !== y) return x.localeCompare(y);
    return arr.indexOf(a) - arr.indexOf(b);
  });
}

console.log(sortMe(["acvd", "bcc"]));
console.log(sortMe(["acvd", "bcc"]), ["bcc", "acvd"]);
console.log(sortMe(["14", "13"]), ["13", "14"]);
console.log(sortMe(["asdf", "asdf", "14", "13"]), ["13", "14", "asdf", "asdf"]);
console.log(sortMe(["bsde", "asdf", 14, "13"]), ["13", 14, "bsde", "asdf"]);

console.log(sortMe(["asdf", 14, "13", "asdf"]), ["13", 14, "asdf", "asdf"]);
console.log(sortMe(["xxxf", "aaaf", "kf", "f", "ooooof"]), [
  "xxxf",
  "aaaf",
  "kf",
  "f",
  "ooooof",
]);
console.log(sortMe(["xdxf", "xcxf", "xbxf", "xaxf"]), [
  "xdxf",
  "xcxf",
  "xbxf",
  "xaxf",
]);
console.log(sortMe(["xdxf", "xcxa", "xbxf", "xaxf"]), [
  "xcxa",
  "xdxf",
  "xbxf",
  "xaxf",
]);
