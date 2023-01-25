// Hells Kitchen    KYU 7
/*
        input: string of four words
        output: string w words changed to gordon language
            - ALL CAPS
            - every word ends with "!!!!"
            - any a/A -> @
            - other vowels -> "*"
    */
/*  PSEUDO
        - split string into an array of words UPPERCASE
        - have a vowels arr to check against.     
        - check each word's letters .. replace Vowels and a/A
        - add !!!! to each word
    */

gordon("i am a chef"); // '*!!!! @M!!!! @!!!! CH*F!!!!'

function gordon(a) {
  const vowels = ["E", "I", "O", "U"];
  let words = a.toUpperCase().split(" ");
  const vowelReplacer = function (word) {
    return word
      .split("")
      .map((char) => {
        return vowels.includes(char)
          ? (char = "*")
          : char === "A"
          ? (char = "@")
          : char;
      })
      .join("");
  };
  return words.map((word) => vowelReplacer(word) + "!!!!").join(" ");
}
console.log(gordon("i am a chef")); // '*!!!! @M!!!! @!!!! CH*F!!!!'
