/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */

import characterCount from "../KYU_6/characterCounts";

test("should return `undefined` when no characters are specified to count", () => {
  expect("Hello".characterCount()).toBeUndefined();
});

test("should return the number of times the given character appears in the string", function () {
  const res = "lol".characterCount("l");
  expect(res).toBe(2);
});

test("should return the number of times each given character appears in the string when more than 1 is provided", function () {
  const res = "booop-booop-deee-doo-dooop".characterCount("ado");
  expect(res).toEqual([0, 3, 11]);
});

test("should return the number of times each given character appears in the string, even when duplicates are provided", function () {
  const res = "booop-booop-deee-doo-dooop".characterCount([
    "a",
    "d",
    "o",
    "o",
    "d",
    "a",
  ]);
  expect(res).toEqual([0, 3, 11, 11, 3, 0]);
});
