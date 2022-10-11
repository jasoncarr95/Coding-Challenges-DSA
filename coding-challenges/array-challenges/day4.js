/*  Day 4 Tue. 10.11.22

    - write twin functions that each take in a given value that will only appear once within 
    a given 2D array 
    - either move that value up one row or down one row in the array, 
    keeping its horizontal position the same
        (swap places with whatever was where it needed to be)
    - if value is as high or as low as it can get, leave it 
    - mutate the original array

    (grid.length === subArrs.length)

    PARAM: 2-D array
    RETURN: mutataed 2D array

    PSEUDO
        - find indexOf value (in nested arr)
        - check if at the end.. return  same grid
            - else continue
        - swap values
            UP
                - swap with gridIndex -1 @ same nestedArrIndex
            DOWN
                - swap with gridIndex + 1 @ same nestedArrIndex

        better solution??:
            - 
*/

const findValueInGrid = function (grid, value) {
    let gridIndex, nestedArrIndex;

    for (let i = 0; i < grid.length; i++) {
        if (grid[i].indexOf(value) >= 0) {
            [gridIndex, nestedArrIndex] = [i, grid[i].indexOf(value)];
        }
    }

    return [gridIndex, nestedArrIndex];
};

const shiftGridValueUp = function (grid, value) {
    // Find value in the grid
    let [gridIndex, nestedArrIndex] = findValueInGrid(grid, value);

    // if value is at the end already, return unmutated grid
    if (gridIndex === 0) return grid;

    // store variable that we are swapping
    let swappedValue = grid[gridIndex - 1][nestedArrIndex];

    // swap variables
    grid[gridIndex][nestedArrIndex] = swappedValue;
    grid[gridIndex - 1][nestedArrIndex] = value;
    // return mutated grid
    return grid;
};

const shiftGridValueDown = function (grid, value) {
    // Find value in the grid
    let [gridIndex, nestedArrIndex] = findValueInGrid(grid, value);

    // if value is at the end already, return unmutated grid
    if (gridIndex === grid.length - 1) return grid;

    // store variable that we are swapping
    let swappedValue = grid[gridIndex + 1][nestedArrIndex];

    // swap variables
    grid[gridIndex][nestedArrIndex] = swappedValue;
    grid[gridIndex + 1][nestedArrIndex] = value;
    // return mutated grid
    return grid;
};

let myGrid = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
];

console.log("OG Grid", myGrid);

// call move up function with 'h' and myGrid
console.log(shiftGridValueUp(myGrid, "h")); // [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
console.log(shiftGridValueUp(myGrid, "h")); // [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move up function again, same arguments
// Note that 'h' is already as far up as it can go
console.log(shiftGridValueUp(myGrid, "h")); // [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// call move down function this time, with 'f' and myGrid as arguments
console.log(shiftGridValueDown(myGrid, "f")); // [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// call move down function again, same arguments
// Note that 'f' is already as far down as it can go
console.log(shiftGridValueDown(myGrid, "f")); // [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]
