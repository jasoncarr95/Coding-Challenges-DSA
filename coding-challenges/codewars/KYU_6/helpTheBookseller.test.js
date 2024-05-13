import assert from "node:assert/strict";
// import assert from "assert";
import stockList from "./helpTheBookseller";

// const assert = require("chai").assert;
describe("Tests", () => {
  let listOfStock, listOfCategories, result;
  it("test 1", () => {
    listOfStock = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
    listOfCategories = ["A", "B", "C", "D"];
    result = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
    assert.strictEqual(stockList(listOfStock, listOfCategories), result);
  });

  it("Test 2", () => {
    listOfStock = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
    listOfCategories = ["A", "B"];
    result = "(A : 200) - (B : 1140)";
    assert.strictEqual(stockList(listOfStock, listOfCategories), result);
  });

  it("Return empty string if listOfStock is empty", () => {
    listOfStock = [];
    listOfCategories = ["A", "B"];
    result = "";
    assert.strictEqual(stockList(listOfStock, listOfCategories), result);
  });
  it("Return empty string if listOfCategories is empty", () => {
    listOfStock = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];

    listOfCategories = [];
    result = "";
    assert.strictEqual(stockList(listOfStock, listOfCategories), result);
  });

  /* ----------------------------------------------------------- */
  /*                         FROM COPILOT                        */
  /* ----------------------------------------------------------- */

  // it("Test 3", () => {
  //   b = ["ABCD 100", "EFGH 200", "IJKL 300", "MNOP 400"];
  //   c = ["A", "B", "C", "D"];
  //   res = "(A : 100) - (B : 200) - (C : 300) - (D : 400)";
  //   assert.strictEqual(stockList(b, c), res);
  // });

  // it("Test 4", () => {
  //   b = ["XYZ 500", "ABC 1000", "DEF 2000"];
  //   c = ["X", "Y", "Z"];
  //   res = "(X : 500) - (Y : 0) - (Z : 500)";
  //   assert.strictEqual(stockList(b, c), res);
  // });

  // it("Test 5", () => {
  //   b = ["PQR 0", "STU 0", "VWX 0"];
  //   c = ["P", "Q", "R", "S", "T", "U", "V", "W", "X"];
  //   res =
  //     "(P : 0) - (Q : 0) - (R : 0) - (S : 0) - (T : 0) - (U : 0) - (V : 0) - (W : 0) - (X : 0)";
  //   assert.strictEqual(stockList(b, c), res);
  // });
});
