/**
 * return name capitalized & ends w/ !
 * @param {string} name
 * @returns {string}
 */
var greet = function (name) {
    let newName = name[0].toUpperCase() + name.toLowerCase().slice(1);
    return `Hello ${newName}!`;
};

console.log(greet("riley", `--> "Hello Riley!" `));
console.log(greet("JACK", `--> "Hello Jack!" `));
