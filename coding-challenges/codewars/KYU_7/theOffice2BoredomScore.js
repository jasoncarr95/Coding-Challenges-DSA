/**
 *
 * @param {object} staff {names: department}
 *
 */

// Object.values(staff) => array of depts
// map the dept names to their corresponding values using {}
// reduce the values to a sum
// return statement based on total sum

function boredom(staff) {
  const boredScore = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };
  const departments = Object.values(staff);
  // console.log(departments);
  const totalScore = departments
    .map((dept) => boredScore[dept])
    .reduce((a, b) => a + b, 0);

  return totalScore <= 80
    ? "kill me now"
    : totalScore < 100
    ? "i can handle this"
    : "party time!!";
}

module.exports = boredom;

// console.log(
//     boredom({
//         tim: "IS",
//         jim: "finance",
//         randy: "pissing about",
//         sandy: "cleaning",
//         andy: "cleaning",
//         katie: "cleaning",
//         laura: "pissing about",
//         saajid: "regulation",
//         alex: "regulation",
//         john: "accounts",
//         mr: "canteen",
//     })
// );
// console.log(
//     boredom({
//         tim: "accounts",
//         jim: "accounts",
//         randy: "pissing about",
//         sandy: "finance",
//         andy: "change",
//         katie: "IS",
//         laura: "IS",
//         saajid: "canteen",
//         alex: "pissing about",
//         john: "retail",
//         mr: "pissing about",
//     })
// );
// console.log(
//     boredom({
//         tim: "change",
//         jim: "accounts",
//         randy: "canteen",
//         sandy: "change",
//         andy: "change",
//         katie: "IS",
//         laura: "change",
//         saajid: "IS",
//         alex: "trading",
//         john: "accounts",
//         mr: "finance",
//     })
// );

// const chai = require("chai");
// const assert = chai.assert;

// describe("boredom", function () {
//     it("should test", function () {
//         assertEquals(
//             boredom({
//                 tim: "change",
//                 jim: "accounts",
//                 randy: "canteen",
//                 sandy: "change",
//                 andy: "change",
//                 katie: "IS",
//                 laura: "change",
//                 saajid: "IS",
//                 alex: "trading",
//                 john: "accounts",
//                 mr: "finance",
//             }),
//             "kill me now"
//         );
//         assertEquals(
//             boredom({
//                 tim: "IS",
//                 jim: "finance",
//                 randy: "pissing about",
//                 sandy: "cleaning",
//                 andy: "cleaning",
//                 katie: "cleaning",
//                 laura: "pissing about",
//                 saajid: "regulation",
//                 alex: "regulation",
//                 john: "accounts",
//                 mr: "canteen",
//             }),
//             "i can handle this"
//         );
//         assertEquals(
//             boredom({
//                 tim: "accounts",
//                 jim: "accounts",
//                 randy: "pissing about",
//                 sandy: "finance",
//                 andy: "change",
//                 katie: "IS",
//                 laura: "IS",
//                 saajid: "canteen",
//                 alex: "pissing about",
//                 john: "retail",
//                 mr: "pissing about",
//             }),
//             "party time!!"
//         );
//     });
// });
