const gameGrid = [
    [
        "/dist/images/bob1.png",
        "/dist/images/bob2.png",
        "/dist/images/bob3.png"

    ],

    [
      "/dist/images/bob4.png",
      "/dist/images/bob5.png",
      "/dist/images/bob6.png"
    ],

    [
      "/dist/images/bob7.png",
      "/dist/images/bob8.png",
      "/dist/images/bob9.png"
    ],
];

const blankSpace = [0, gameGrid[0].length - 1];

const blankUrl = "/dist/images/blank-tile.png";

const gridWithBlank = gameGrid.map((subArray, ind) => {
    if (ind === blankSpace[0]) {
        const sub = subArray.map((x) => x);

        return sub.map((val, i) => {
            if (i === blankSpace[1]) {
                return blankUrl;
            }
            return val;
        });
    }
    return subArray.map((x) => x);
});

const Winner = (props) => {
    return /*#__PURE__*/ React.createElement(
        "h2",
        null,
        "You won! It took you ",
        props.moves,
        " moves!"
    );
};

const GameBoard = (props) => {
    return /*#__PURE__*/ React.createElement(
        "section",
        { id: "gameBoard" },
        props.grid.map((arr, arrInd) => {
            return arr.map((val, valInd) => {
                return /*#__PURE__*/ React.createElement(
                    "div",
                    {
                        className: "gameSquare",
                        onClick: () => {
                            return props.onMove(arrInd, valInd);
                        },
                    } /*#__PURE__*/,

                    React.createElement("img", {
                        src: val,
                        alt: `Tile ${valInd + 1}`,
                        id: val,
                    })
                );
            });
        })
    );
};

const Game = () => {
    const [grid, setGrid] = React.useState(
        [...gridWithBlank].map((x) => [...x])
    );
    const [isWin, setIsWin] = React.useState(false);
    const [moveCount, setMoveCount] = React.useState(0);

    const blankSubArr = grid.findIndex((x) => x.includes(blankUrl));
    const blankIndex = grid[blankSubArr].indexOf(blankUrl);

    // insert Day1 function 'checkWin' here
    // instead of return true or return false, use setIsWin(true) or setIsWin(false)
    const checkWin = (arr1, arr2) => {
        for (let i = 0; i < arr1.length; i++) {
            // console.log(arr1[i])
            for (let j = 0; j < arr1[i].length; j++) {
                if (arr1[i][j] !== arr2[i][j]) return setIsWin(false);
            }
        }
        return setIsWin(true);
    };

    // insert Day2 move left function 'moveBlankLeft(curGrid, blankChar)' here
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)

    function moveBlankLeft(curGrid, blankChar) {
        if (curGrid.indexOf(blankChar) === 0) {
            checkWin(gridWithBlank, curGrid);
            return curGrid;
        } else {
            let itemIndex = curGrid.indexOf(blankChar);
            let swappedValue = curGrid[itemIndex - 1];
            curGrid[itemIndex] = swappedValue;
            curGrid[itemIndex - 1] = blankChar;

            checkWin(gridWithBlank, curGrid);
            return curGrid;
        }
    }

    // insert Day2 move right function 'moveBlankRight(curGrid, blankChar)' here
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)
    function moveBlankRight(curGrid, blankChar) {
        if (curGrid.indexOf(blankChar) === curGrid.length - 1) {
            checkWin(gridWithBlank, curGrid);

            return curGrid;
        } else {
            let itemIndex = curGrid.indexOf(blankChar);
            let swappedValue = curGrid[itemIndex + 1];
            curGrid[itemIndex] = swappedValue;
            curGrid[itemIndex + 1] = blankChar;

            checkWin(gridWithBlank, curGrid);
            return curGrid;
        }
    }

    // DAY 4 HELPER FUNCTION
    const findValueInGrid = function (grid, value) {
        let gridIndex, nestedArrIndex;

        for (let i = 0; i < grid.length; i++) {
            if (grid[i].indexOf(value) >= 0) {
                [gridIndex, nestedArrIndex] = [i, grid[i].indexOf(value)];
            }
        }

        return [gridIndex, nestedArrIndex];
    };
    // insert Day4 move up function 'moveBlankUp(curGrid, blankGrid) here'
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)

    function moveBlankUp(curGrid, blankGrid) {
        // Find value in the grid
        let [gridIndex, nestedArrIndex] = findValueInGrid(curGrid, blankGrid);

        // if value is at the end already, return unmutated grid
        if (gridIndex === 0) {
            checkWin(gridWithBlank, curGrid);
            return curGrid;
        }

        // store variable that we are swapping
        let swappedValue = curGrid[gridIndex - 1][nestedArrIndex];

        // swap variables
        curGrid[gridIndex][nestedArrIndex] = swappedValue;
        curGrid[gridIndex - 1][nestedArrIndex] = blankGrid;
        // return mutated grid
        checkWin(gridWithBlank, curGrid);
        return curGrid;
    }

    // insert Day4 move down function 'moveBlankDown(curGrid, blankGrid) here'
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)
    function moveBlankDown(curGrid, blankGrid) {
        // Find value in the grid
        let [gridIndex, nestedArrIndex] = findValueInGrid(curGrid, blankGrid);

        // if value is at the end already, return unmutated grid
        if (gridIndex === curGrid.length - 1) {
            checkWin(gridWithBlank, curGrid);
            return curGrid;
        }

        // store variable that we are swapping
        let swappedValue = curGrid[gridIndex + 1][nestedArrIndex];

        // swap variables
        curGrid[gridIndex][nestedArrIndex] = swappedValue;
        curGrid[gridIndex + 1][nestedArrIndex] = blankGrid;
        // return mutated grid
        checkWin(gridWithBlank, curGrid);
        return curGrid;
    }

    // My found and modified Day5 shuffle function
    // Uses Durstenfeld shuffle algorithm
    const shuffleGrid = () => {
        setIsWin(false);
        const tempFlatGrid = [...grid].map((x) => [...x]).flat();

        for (let i = tempFlatGrid.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = tempFlatGrid[i];
            tempFlatGrid[i] = tempFlatGrid[j];
            tempFlatGrid[j] = temp;
        }

        const tempGrid = [];
        while (tempFlatGrid.length) {
            tempGrid.push(tempFlatGrid.splice(0, 3));
        }

        setGrid(tempGrid);
    };

    const resetGame = () => {
        setGrid([...gridWithBlank].map((x) => [...x]));
        setIsWin(false);
        setMoveCount(0);
    };

    const handleMove = (arrInd, valInd) => {
        const newGrid = [...grid].map((x) => [...x]);

        if (arrInd === blankSubArr) {
            const gridDimension = newGrid.length;
            if (valInd - blankIndex === 1) {
                // move right
                const modifiedArr = [];
                for (let i = 0; i < newGrid.length; i++) {
                    if (i === blankSubArr) {
                        modifiedArr.push(moveBlankRight(newGrid[i], blankUrl));
                    } else {
                        modifiedArr.push(newGrid[i]);
                    }
                }

                checkWin(gridWithBlank, modifiedArr);
                setGrid([...modifiedArr].map((x) => x));
                setMoveCount(moveCount + 1);
            } else if (
                valInd - blankIndex === -1 &&
                blankIndex % gridDimension
            ) {
                // move left
                const modifiedArr = [];
                for (let i = 0; i < newGrid.length; i++) {
                    if (i === blankSubArr) {
                        modifiedArr.push(moveBlankLeft(newGrid[i], blankUrl));
                    } else {
                        modifiedArr.push(newGrid[i]);
                    }
                }

                checkWin(gridWithBlank, modifiedArr);
                setGrid([...modifiedArr].map((x) => x));
                setMoveCount(moveCount + 1);
            }
        } else if (arrInd !== blankSubArr && valInd === blankIndex) {
            if (arrInd - blankSubArr === 1) {
                // move down
                setGrid([...moveBlankDown(newGrid, blankUrl)].map((x) => x));
                setMoveCount(moveCount + 1);
            } else if (arrInd - blankSubArr === -1) {
                // move up
                setGrid([...moveBlankUp(newGrid, blankUrl)].map((x) => x));
                setMoveCount(moveCount + 1);
            }
        }
    };

    return /*#__PURE__*/ React.createElement(
        "div",
        null /*#__PURE__*/,
        React.createElement(
            "button",
            { onClick: () => shuffleGrid() },
            "Shuffle"
        ) /*#__PURE__*/,
        React.createElement(
            "button",
            { onClick: () => resetGame() },
            "New Game"
        ),
        isWin /*#__PURE__*/
            ? React.createElement(Winner, { moves: moveCount }) /*#__PURE__*/
            : React.createElement(GameBoard, {
                  onMove: (arrInd, valInd) => handleMove(arrInd, valInd),
                  grid: grid,
              })
    );
};

ReactDOM.render(
    /*#__PURE__*/ React.createElement(Game, null),
    document.getElementById("root")
);

//
