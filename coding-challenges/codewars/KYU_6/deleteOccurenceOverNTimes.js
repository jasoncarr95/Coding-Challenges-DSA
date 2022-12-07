// inputs: a list (array) .. always nums
// n always a positive integer
// return: new Arr (dont mutate orig)

// n = max num of occurences
// start with empty object & empty resultArr
// iterate over orignal array
// for every occurence of the item, add 1 to its value in our tracker object
// push to our result
// if value of num occurences >= N : dont add to resultArr
// return our result

function deleteNth(arr, n) {
    let result = [];
    let trackerObj = {};

    for (let motif of arr) {
        // if (motif in trackerObj) {
        //     trackerObj[motif]++;
        // } else trackerObj[motif] = 1;

        motif in trackerObj ? trackerObj[motif]++ : (trackerObj[motif] = 1);

        if (trackerObj[motif] <= n) result.push(motif);
    }
    return result;
}

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)); // [1,2,3,1,2,3]
console.log(deleteNth([420, 69, 420, 350, 69, 69], 1)); // [420, 69, 350]
console.log(deleteNth([420, 69, 69, 420, 350], 2)); // [420, 69, 69, 420, 350]
