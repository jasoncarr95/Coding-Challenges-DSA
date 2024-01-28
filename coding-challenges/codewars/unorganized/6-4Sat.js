//  TIP CALCULATOR   KYU 8
// calculating how much to tip based on total amount and the quality of service
// terrible = 0 %; poor = 5%; good = 10%; great = 15%; excellent = 20%
//case insensitive
//  Parmeters:  given amount (integer), and quality of serv. (string)
// unrecognized rating may be given
//  Return: return an integer ... ROUND UP
//  Example:
//  console.log(calculateTip(26.95,"good")) //3
//  console.log(calculateTip(20,"Excellent")) // 4
//  PseudoCode:

function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case "terrible":
      return 0;
      break;
    case "poor":
      return Math.ceil(amount * 0.05);
      break;
    case "good":
      return Math.ceil(amount * 0.1);
      break;
    case "great":
      return Math.ceil(amount * 0.15);
      break;
    case "excellent":
      return Math.ceil(amount * 0.2);
      break;
    default:
      return "Rating not recognised";
      break;
  }
}

//  SIMPLE CALCULATOR   KYU 8
function calculator(a, b, sign) {
  if (typeof a != "number" || typeof b != "number") return "unknown value";
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "unknown value";
      break;
  }
}

// function basicOp(operation, value1, value2)
// {
//   switch (operation){
//         case "+": return value1+value2;
//         case "-": return value1-value2;
//         case "*": return value1*value2;
//         case "/": return value1/value2;
//         default: return "unknown value";
//         break;
//     }Code
// }

//  DRINK ABOUT     KYU 8
function peopleWithAgeDrink(old) {
  return old < 14
    ? "drink toddy"
    : old < 18
      ? "drink coke"
      : old < 21
        ? "drink beer"
        : "drink whisky";
}
