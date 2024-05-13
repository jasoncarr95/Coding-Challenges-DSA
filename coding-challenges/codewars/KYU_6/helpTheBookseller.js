/**
 * @source https://www.codewars.com/kata/54dc6f5a224c26032800005c
 */

/**
 * - Books classified in categories (A-Z)
 * - each book has a code `c` of 3+ chars.. first is a capital letter (category)
 *   - `c` then space, then positive integer(# in stock)
 *
 *
 * find all books in list with codes belonging to each category, and sum their quantity according to each category
 * 
 * 
 * 
  // iterate through listOfStock:
  // get count of books in each category ([1st char of code, num] of each element in listOfStock)
  // iterate through listOfCategories,
  // construct a string with proper format
  // return string: "(CATEGORY: NUM_IN_STOCK) - ..."

 */

export default function stockList(listOfStock, listOfCategories) {
  // if either are empty, return empty string
  if (listOfStock.length === 0 || listOfCategories.length === 0) return "";

  const map = {};
  let result = [];

  for (const element of listOfStock) {
    let category = element[0];
    let numBooks = Number(element.split(" ")[1]);

    if (category in map) {
      map[category] += numBooks;
    } else {
      map[category] = numBooks;
    }
  }

  for (const cat of listOfCategories) {
    let num = map[cat];

    result.push(`(${cat} : ${num || 0})`);
  }

  // return formatted string: "(CATEGORY: NUM_IN_STOCK) - ..."
  return result.join(" - ");
}

let L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
let M = ["A", "B", "C", "W"];

console.log(stockList(L, M)); // "(A : 20) - (B : 114) - (C : 50) - (W : 0)"
