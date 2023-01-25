// Multiplication table for number  KYU 8
function multiTable(number) {
  let result = "";
  for (i = 1; i <= 10; i++) {
    result += `${i} * ${number} = ${i * number}\n`;
  }
  return result.slice(0, -1);
}
