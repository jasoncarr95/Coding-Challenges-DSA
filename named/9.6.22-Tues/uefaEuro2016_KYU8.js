function uefaEuro2016(teams, scores) {
    if (scores[0] === scores[1])
        return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;

    let winner = teams[scores.indexOf(Math.max(...scores))];
    return `At match ${teams[0]} - ${teams[1]}, ${winner} won!`;
}

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0]));
// "At match Germany - Ukraine, Germany won!")
console.log(uefaEuro2016(["Germany", "Ukraine"], [0, 0]));
