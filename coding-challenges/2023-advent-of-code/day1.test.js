import { getOnlyNums } from "./day1";

describe("getOnlyNums", () => {
  it("should return a string with only numbers", () => {
    expect(getOnlyNums("abc123def456")).toEqual("123456");
    expect(getOnlyNums("1a2b3c4d5e6f")).toEqual("123456");
    expect(getOnlyNums("!@#$%^&*()")).toEqual("");
  });

  it("should handle empty string", () => {
    expect(getOnlyNums("")).toEqual("");
  });

  it("should handle string with no numbers", () => {
    expect(getOnlyNums("abcdef")).toEqual("");
  });

  // Handles numbers with 0
  it("should handle numbers with a 0", () => {
    expect(getOnlyNums("80as0as8")).toEqual("8008");
  });
});
