//preload variable: dict
// dict keys are capital letters
// dict["P"] == "perfect"

/**
 *
 * @param {string} string an acronym, no spaces
 * @returns {string} words, with spaces in between
 */
var makeBackronym = function (string) {
  //  split input str into separate letters, all uppercase "dgm" => ["D", "G", "M"]
  let keys = string.toUpperCase().split("");
  return keys.map((key) => dict[key]).join(" ");
  // map arr of keys to the dictionary values dict[key]
  // return as space separated string
};

console.log(makeBackronym("dgm"), "=>", "disturbing gregarious mustache");
console.log(makeBackronym("lkj"), "=>", "literal klingon joke");
