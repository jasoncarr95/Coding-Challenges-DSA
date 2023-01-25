// How many stairs will Suzuki climb in 20 years? // KYU 8
// input: is an array of arrays
// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]

// calculate his one year total * 20

// iterate through the inner array of stairs in each days
// reduce each day to a total (mon = 10000)
// then iterate through outter arr (day totals), and add all those together
// return that num *20

function stairsIn20(s) {
  let result = 0;

  for (const day of s) {
    result += day.reduce((a, b) => a + b, 0);
  }
  return result;
}
