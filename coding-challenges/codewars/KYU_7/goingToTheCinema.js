/**
 * returns how many times he must gop to cinama so that that sys b < sys a
 * round up to nearest dollar
 * @param {number} card price of card
 * @param {number} ticket price of normal ticket
 * @param {number} perc fraction pays for precious ticket
 */

/*
    - variables for running total of each system, count(#movie trips)
    - loop: add to each running total
        - in loop compare, system a > b
        - round b up to nearest dollar
*/

// function movie(card, ticket, perc) {
//     let systemA = 0,
//         systemB = card,
//         trips = 0;
//     // let discountedTicket = ticket;

//     while (systemA < Math.ceil(systemB)) {
//         ++trips;
//         systemA += ticket;
//         // discountedTicket *= perc;

//         systemB += ticket * Math.pow(perc, trips);
//         // console.log(trips, systemA, systemB, discountedTicket);
//     }
//     return trips;
// }

function movie(card, ticket, perc) {
    let systemA = 0,
        systemB = card,
        trips = 0;

    while (Math.ceil(systemA) <= Math.ceil(systemB)) {
        ++trips;
        systemB += ticket * Math.pow(perc, trips);
        systemA += ticket;
    }

    return trips;
}

console.log(movie(500, 15, 0.9), "=> 43"); // should return 43
// (with card the total price is 634, with tickets 645)
console.log(movie(100, 10, 0.95), "=> 24"); //should return 24
//(with card the total price is 235, with tickets 240)
