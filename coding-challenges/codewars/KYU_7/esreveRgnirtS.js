String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("String".reverse()); // "gnirtS"
console.log("Super awesome string".reverse()); // => returns "gnirts emosewa repuS"
