//  Name on billboard   KYU 8
//  Parmeters:  given a string (name) and price per letter (default if not given is 30)
//  Return: return total cost       cant use "*" multiplier
//  Example:
//  console.log(billboard("Jeong-Ho Aristotelis"))  //  600 .... 20*30

//  PseudoCode:

function billboard(name, price = 30) {
  let result = 0;
  for (let i = 0; i < name.length; i++) {
    result += price;
  }
  return result;
}

//  L1: Set Alarm
function setAlarm(employed, vacation) {
  if (vacation || !employed) return false;
  else return true;
}

//  L1: Bartender, drinks!

function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}
