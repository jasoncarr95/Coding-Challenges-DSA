function consonantCount(str) {
  // input => always a string.. may be empty
  // output => number
  // check if letter && not a vowel
  const vowels = ["a", "e", "i", "o", "u"];
  const letters = str.toLowerCase().split("");

  let count = 0;
  for (const char of letters) {
    if (
      char.toLowerCase() !== char.toUpperCase() &&
      vowels.indexOf(char) == -1
    ) {
      count++;
    }
  }
  return count;
}
