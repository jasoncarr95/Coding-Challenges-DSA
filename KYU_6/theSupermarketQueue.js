/**
 * @param {Array<number>} customers each represents a customer.. value is the time needed to checkout
 * @param {number} n number of checkout tills
 * @returns {number} total time required // as integer //
 */

/* calculate total time required for all customers to checkout

    check if arr lenght <= num queues, return sum 
*/

function queueTime(customers, n) {
    // creates an array of length n representing the tills
    // Each till is given a value of 0 to represent initial waitTime before the queue begins.
    const tills = new Array(n).fill(0);
    // goes through the queue of customer waitTimes
    for (let waitTime of customers) {
        // finds the till with the least wait time on it, adds the next customer's time to it
        const lowestWaitTill = tills.indexOf(Math.min(...tills));
        tills[lowestWaitTill] += waitTime;
    }
    // end result is that the waitTimes (load) on the tills are distributed optimally.
    // The waitTime of the till with the heaviest load represents the total time taken
    return Math.max(...tills);
}

console.log(queueTime([], 1)); // 0
console.log(queueTime([1, 2, 3, 4, 5], 100)); // 5
console.log(queueTime([1, 2, 3, 4], 1)); //10

console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // 10
console.log(queueTime([5, 5, 5], 2)); // 10
console.log(queueTime([10, 2, 3, 3], 2)); // 2,3,4 finish before 10

console.log(queueTime([2, 3, 10], 2)); // should return 12

console.log(queueTime([10, 10, 5, 5, 2], 3)); // 10 | 10 | 5+5+2 => 12
