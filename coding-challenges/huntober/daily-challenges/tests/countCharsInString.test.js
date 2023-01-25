import countCharsInString from "../countCharsInString";

test("should return empty object if str is empty", () => {
  expect(countCharsInString("")).toStrictEqual({});
});

test("should pass sample test", () => {
  expect(countCharsInString("aba")).toStrictEqual({ a: 2, b: 1 });
});
