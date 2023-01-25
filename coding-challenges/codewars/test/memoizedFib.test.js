// import fibonacci from "../KYU_5/memoizedFib";
import { fibonacci, fibPrivateCache } from "../KYU_5/memoizedFib";

describe("Memoized Fibonacci", () => {
  it("should return the correct fibonacci number", () => {
    expect(fibonacci(5)).toEqual(5);
    expect(fibonacci(10)).toEqual(55);
    expect(fibonacci(15)).toEqual(610);
  });
});

describe("Memoized Fibonacci with private cache", () => {
  it("should return the correct fibonacci number", () => {
    expect(fibPrivateCache(5)).toEqual(5);
    expect(fibPrivateCache(10)).toEqual(55);
    expect(fibPrivateCache(15)).toEqual(610);
  });
});
