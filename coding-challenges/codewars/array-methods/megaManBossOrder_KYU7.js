/*
    input: array of objects
    output: array of boss names in order of ease

    start with difficulty === 1
    then fight boss with weakness === weapon of previous bosh

*/
/*  PSEUDO
        - constuct new arr
        - find boss diff ===1 , add to front of arr
        - iterate.. push next boss to arr based on weakness 
*/

function getBossOrder(bosses) {
  const weakest = bosses.find((boss) => boss.difficulty === 1);
  const fightOrder = [weakest.name];
  let myWeapon = weakest.weapon;
  let nextBoss;
  while (fightOrder.length < bosses.length) {
    nextBoss = bosses.find((boss) => boss.weakness === myWeapon);
    fightOrder.push(nextBoss.name);
    myWeapon = nextBoss.weapon;
  }
  return fightOrder;
}

let masters = [
  {
    name: "Fire Man",
    weapon: "Fire",
    weakness: "Water",
    difficulty: 5,
  },
  {
    name: "Water Man",
    weapon: "Water",
    weakness: "Electricity",
    difficulty: 6,
  },
  {
    name: "Wood Man",
    weapon: "Leaf Shield",
    weakness: "Fire",
    difficulty: 1,
  },
  {
    name: "Electric Man",
    weapon: "Electricity",
    weakness: "Leaf Shield",
    difficulty: 8,
  },
];

console.log(getBossOrder(masters)); // ["Wood Man", "Electric Man", "Water Man", "Fire Man"]
