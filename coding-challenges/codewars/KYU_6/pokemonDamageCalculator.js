/**
 * Calc damage move would do using following formula
 * damage = 50 * (attack / defense) * effectiveness
 *
 * Effectiveness = based on the matchup
 * Super effective: 2x damage
 * Neutral: 1x damage
 * Not very effective: 0.5x damage
 * fire > grass
 * fire < water
 * fire = electric
 * water < grass
 * water < electric
 * grass = electric
 * type against itself is not bery effective
 *
 *
 *
 * PSEUDO:
 * - calculate the effectiveness based on matchup
 * - plug effect into formula, and return damage
 */

// @ts-check
/**
 * @param {string} yourType
 * @param {string} opponentType
 * @param {number} attack
 * @param {number} defense
 */
function calculateDamage(yourType, opponentType, attack, defense) {
    function calcEffectiveness(yourType, opponentType) {
        // YOUR TYPE : opponent -> returns effectiveness
        const effectivenessMap = {
            fire: {
                grass: 2,
                water: 0.5,
                electric: 1,
            },
            water: {
                grass: 0.5,
                electric: 0.5,
                fire: 2,
            },
            grass: {
                water: 2,
                electric: 1,
                fire: 0.5,
            },
            electric: {
                grass: 1,
                water: 2,
                fire: 1,
            },
        };
        if (yourType === opponentType) return 0.5;
        return effectivenessMap[yourType][opponentType];
    }
    // function calcEffectiveness(yourType, opponentType) {
    //     // YOUR TYPE : opponent -> returns effectiveness
    //     const strength = {
    //         fire: "grass",
    //         water: "fire",
    //         electric: "water",
    //         grass: "water",
    //     };
    //     if (yourType === opponentType) return 0.5;
    //     if (yourType === strength[opponentType]) return 0.5;
    //     if (opponentType === strength[yourType]) return 2;
    //     return 1;
    //     // return effectivenessMap[yourType][opponentType];
    // }

    const effectiveness = calcEffectiveness(yourType, opponentType);
    const damage = 50 * (attack / defense) * effectiveness;
    return damage;
}

console.log(calculateDamage("fire", "water", 100, 100), 25);

console.log(calculateDamage("grass", "water", 100, 100), 100);
console.log(calculateDamage("electric", "fire", 100, 100), 50);
console.log(calculateDamage("grass", "electric", 57, 19), 150);
console.log(calculateDamage("grass", "water", 40, 40), 100);
console.log(calculateDamage("grass", "fire", 35, 5), 175);
console.log(calculateDamage("fire", "electric", 10, 2), 250);

module.exports = calculateDamage;
