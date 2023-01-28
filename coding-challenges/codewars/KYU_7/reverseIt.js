function reverseIt(data) {
  if (typeof data !== "number" && typeof data !== "string") {
    return data;
  }
  if (typeof data == "number") {
    let reversedNumber = data.toString().split("").reverse().join("");
    return Number(reversedNumber);
  }
  return data.split("").reverse().join("");
}
console.log(reverseIt("Hello"), "=>", "olleH");
console.log(reverseIt(314159), "=>", 951413);
console.log(reverseIt("314159"), "=>", "951413");
console.log(reverseIt([]), "=>", []);
