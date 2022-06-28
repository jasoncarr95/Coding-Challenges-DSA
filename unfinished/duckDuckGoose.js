//  Duck Duck Goose   KYU 8
//  Parmeters:
//  Return:
//  Example:
//  PseudoCode:

class Player {
    constructor(name) {
        this.name = name;
    }
  }
  
  let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
  let players = ex_names.map((n) => new Player(n));
  function duckDuckGoose(players, goose) {
      if(goose > players.length) {
        goose = goose % players.length
      }
      return players[goose-1].name
    }
  
  
  console.log(duckDuckGoose(players, 28))   //  "g"
  