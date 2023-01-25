function order(words) {
  function getNumberFromString(s) {
    return Number(s.replace(/\D/g, ""));
  }

  return words
    .split(" ")
    .sort((a, b) => {
      let numA = getNumberFromString(a);
      let numB = getNumberFromString(b);

      return numA - numB;
    })
    .join(" ");
}
