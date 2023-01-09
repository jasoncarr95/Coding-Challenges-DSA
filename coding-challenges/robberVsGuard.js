/**
 * door @ (0,0)
 * input: Robber
 */

/**
 *
 * @param {number} robberX position
 * @param {number} robberY position
 * @param {number} robberSpeed feet/second
 * @param {number} guardX position
 * @param {number} guardY position
 * @param {number} guardSpeed feet/section
 * @returns {number} where they meet, or if robber escapes
 *
 */

function bankRobber(robberX, robberY, robberSpeed, guardX, guardY, guardSpeed) {
    // if robber reaches door first, return escaped
    // find how long it takes for robber to get to door (time)
    // distance
    // find how long it takes for guard to get to robber (time)
    // assume guard takes optimal path to robber

    const robberDistance = Math.sqrt(robberX ** 2 + robberY ** 2);
    console.log(robberDistance);
    const robberTime = robberDistance / robberSpeed;
    console.log(robberTime);

    const guardDistance = Math.sqrt(guardX ** 2 + guardY ** 2);
    console.log(guardDistance);
    const guardTime = guardDistance / guardSpeed;
    console.log(guardTime);
}

console.log(bankRobber(-100, 200, 20, 100, 200, 20));

// Key to tackling problems is simplification
// Find & Solve a simpler problem first

/* Options:
1. have guard and robber head towards toward directly 
2. ignore x axis, only use Y values
3. have only the robber - see how long it takes him to escape
4. figure out where robber will be after 1 second

The hard part is figuring out change in 2D movement (not just a straight line)
- SO, either take baby steps to figure that out first,
OR leave that part out of problem, & work on overall structure of problem first 
*/

// Option 4: where robber is after 1 second... change in X & Y value (a right triangle)