// // const { assert, config, expect } = require("chai");

// const chai = require("chai");
// const assert = chai.assert;
// const { expect } = require("chai");
const calculateDamage = require("../KYU_6/pokemonDamageCalculator");

// describe("Sample tests", () => {
//     it("Tests", () => {
//         assert.equal(calculateDamage("fire", "water", 100, 100), 25);
//         assert.equal(calculateDamage("grass", "water", 100, 100), 100);
//         assert.equal(calculateDamage("electric", "fire", 100, 100), 50);
//         assert.equal(calculateDamage("grass", "electric", 57, 19), 150);
//         assert.equal(calculateDamage("grass", "water", 40, 40), 100);
//         assert.equal(calculateDamage("grass", "fire", 35, 5), 175);
//         assert.equal(calculateDamage("fire", "electric", 10, 2), 250);
//     });
// });

test("Sample tests", () => {
  expect(calculateDamage("fire", "water", 100, 100)).toBe(25);
  expect(calculateDamage("grass", "water", 100, 100)).toBe(100);
  expect(calculateDamage("electric", "fire", 100, 100)).toBe(50);
  expect(calculateDamage("grass", "electric", 57, 19)).toBe(150);
  expect(calculateDamage("grass", "water", 40, 40)).toBe(100);
  expect(calculateDamage("grass", "fire", 35, 5)).toBe(175);
  expect(calculateDamage("fire", "electric", 10, 2)).toBe(250);
});
