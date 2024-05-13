import assert from "node:assert/strict";
import onlyDuplicates from "./onlyDuplicates.js";

describe("onlyDuplicates", () => {
  it("should remove unique characters from the string", () => {
    assert.strictEqual(onlyDuplicates("abccdefee"), "cceee");
    assert.strictEqual(onlyDuplicates("abccdefee"), "cceee");
    assert.strictEqual(onlyDuplicates("hello"), "ll");
    assert.strictEqual(onlyDuplicates("colloquial"), "ollol");
    assert.strictEqual(onlyDuplicates("foundersandcoders"), "ondersndoders");

    // Copilot Generated
    assert.strictEqual(onlyDuplicates("aabbccdd"), "aabbccdd");
    assert.strictEqual(onlyDuplicates("abcde"), "");
    assert.strictEqual(onlyDuplicates("a"), "");
    assert.strictEqual(onlyDuplicates(""), "");
  });

  it("should handle special characters and numbers", () => {
    // Copilot Generated
    assert.strictEqual(onlyDuplicates("a1b2c3d4e5"), "");
    assert.strictEqual(onlyDuplicates("!@#$%^&*()"), "");
    assert.strictEqual(onlyDuplicates("aabbccdd!@#$%^&*()"), "aabbccdd");
  });
});
