function reverse(str) {
  let words = str
    .trim()
    .split(" ")
    .map((word, index) => {
      return index % 2 !== 0 ? word.split("").reverse().join("") : word;
    });
  return words.join(" ");
}
console.log(
  reverse("Reverse this string, please!"),
  "\n=>Reverse siht string, !esaelp"
);
console.log(
  reverse("I really don't like reversing strings!"),
  "\n=>I yllaer don't ekil reversing !sgnirts"
);
