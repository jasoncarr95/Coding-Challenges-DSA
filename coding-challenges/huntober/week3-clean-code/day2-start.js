/* Day 2    HELPERS & NAMING
FROM: Tues 10/18
COMPLETED: Thu. 10.20.22
*/

/*  HELPER FUNCTIONS
    if you have a  group of functions that do diff things but share common steps
    
    pull common procedures out into a separate function,can then call it in our other functions

    DRY
    - repeated processes are contained in a single function
    - can then update or make changes to that process by editing a single function :)
*/

function comp1(a, b) {
  const c = new Date();
  const da = Math.ceil(
    Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24),
  );
  const db = Math.ceil(
    Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24),
  );
  const as = a.toDateString();
  const bs = b.toDateString();
  if (da * 2 <= db) {
    return `If you thought ${as} was a long wait, wait until you see how long it is until ${bs}.`;
  } else if (da < db) {
    return `Don't worry, ${bs} isn't too much farther away than ${as} in the scheme of things.`;
  } else if (da === db) {
    return `They're the same number of days away!`;
  } else {
    return `You know ${as} is closer, right?`;
  }
}

function comp2(a, b) {
  const c = new Date();
  const da = Math.ceil(
    Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24),
  );
  const db = Math.ceil(
    Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24),
  );
  const as = a.toDateString();
  const bs = b.toDateString();
  if (da < db) {
    const x = Math.floor(db / da);
    return `Looks like ${bs} is ${x} times farther away than ${as}.`;
  } else if (da === db) {
    return `Same exact date there, mate.`;
  } else {
    const x = Math.floor(da / db);
    return `Looks like ${as} is ${x} times farther away than ${bs}.`;
  }
}

function tot(a, b) {
  const c = new Date();
  const da = Math.ceil(
    Math.abs(c.getTime() - a.getTime()) / (1000 * 60 * 60 * 24),
  );
  const db = Math.ceil(
    Math.abs(c.getTime() - b.getTime()) / (1000 * 60 * 60 * 24),
  );
  const as = a.toDateString();
  const bs = b.toDateString();
  const x = db - da;
  return `You have ${da} days left until ${as}, and ${db} days left until ${bs}. There are ${x} days between them.`;
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022, 09, 26);
const dateB = new Date(2022, 11, 25);

console.log(comp1(dateA, dateB));
console.log(comp2(dateA, dateB));
console.log(tot(dateA, dateB));
