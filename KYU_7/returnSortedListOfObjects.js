/**
 *
 * @param {string} sortBy a property of the objects
 * @param {array<object>} list always like {"a": 4} values nums, props always will exist
 * @return list sorted in descending order by sortBy ( a prop)
 */

// sort arr of objects by the sortBy prop

function sortList(sortBy, list) {
    return list.sort((a, b) => b[sortBy] - a[sortBy]);
}

let list = [
    { a: 1, b: 3 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 4, b: 12 },
];

console.log(sortList("a", list));
// [ ({ a: 4, b: 12 }, { a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }) ];
