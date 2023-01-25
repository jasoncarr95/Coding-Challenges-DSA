// Switcheroo   KYU 7
// input: string of letters a,b,c
// output: string, switch posisitonsof letters a and b. c stays the same

// console.log(switcheroo("acb")); // --> 'bca'
// console.log(switcheroo("aabacbaa")); // --> 'bbabcabb'

function switcheroo(x) {
  // split input str into an array of letters
  let result = x.split("").map((e) => {
    if (e === "a") return "b";
    else if (e === "b") return "a";
    else return e;
  });

  return result.join("");
}

// Duck Duck Goose
/**
 * @param players - array of objects (Player.name)
 * @param  goose - index ONE BASED INDEX
 
 * @return Player.name at index
 * if valid anagram return true
 */

class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));
console.log(duckDuckGoose(players, 2));

console.log(duckDuckGoose(players, 1)); // a.name
console.log(duckDuckGoose(players, 5)); // c.name
console.log(duckDuckGoose(players, 4)); // d.name

function duckDuckGoose(players, goose) {
  // 1 based index.. i.e players[1] --> players[0]
  let index = goose - 1;

  // dont go through a full circle
  if (index <= players.length) return players[index].name;
  // go through a full circle
  else {
    return players[index % players.length].name;
  }
}
