//  Grasshopper - Terminal Game combat function   KYU 8

function combat(health, damage) {
  health -= damage;
  return health <= 0 ? 0 : health;
}

//  Grasshopper - Terminal Game #1      KYU 8
function Hero(name) {
  (this.name = name || "Hero"),
    (this.position = "00"),
    (this.health = 100),
    (this.damage = 5),
    (this.experience = 0);
}

//  Grasshopper - Terminal Game Turn Function   KYU 9

//  Grasshopper - Terminal game move function   KYU 8

//  Grasshopper - Bug Squashing     KYU 8

//  Grasshopper - Object syntax debug   KYU 8
const rooms = {
  first: {
    description: "This is the first room",
    items: {
      chair: "The old chair looks comfortable",
      lamp: "This lamp looks ancient",
    },
  },
  second: {
    description: "This is the second room",
    items: {
      couch: "This couch looks like it would hurt your back",
      table: "On the table there is an unopened bottle of water",
    },
  },
};

//  Vowel Remover   KYU 8
function shortcut(string) {
  //  remove all lowercase vowels (not 'y)
  const vowels = "aeiou".split("");
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) string[i] = "";
  }
}
