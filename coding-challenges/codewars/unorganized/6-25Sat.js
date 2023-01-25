//  Milk and Cookies for Santa   KYU 7
//  Parmeters:  given a date object
//  Return: a boolean (true if christ even, else false)
//  Example:
//  console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))  // true
//  console.log(timeForMilkAndCookies(new Date(2013, 0, 23)))   // false
//  console.log(timeForMilkAndCookies(new Date(3000, 11, 24)))  // true
//  PseudoCode:

function timeForMilkAndCookies(date) {
  return date.getDate() === 24 && date.getMonth() === 11;
}
