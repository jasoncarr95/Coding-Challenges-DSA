const sumMix = require("../sumMixedArray");

// assert.strictEqual(sumMix([9, 3, "7", "3"]), 22);
// assert.strictEqual(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
// assert.strictEqual(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);

test("gets sum of all elements after converting them to numbers", () => {
    expect(sumMix([9, 3, "7", "3"])).toEqual(22);
});

test("gets sum of all elements after converting them to numbers", () => {
    expect(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])).toEqual(42);
});

test("gets sum of all elements after converting them to numbers", () => {
    expect(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"])).toEqual(41);
});
