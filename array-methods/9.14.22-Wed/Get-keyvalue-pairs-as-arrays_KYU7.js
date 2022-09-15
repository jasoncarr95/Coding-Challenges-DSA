/*
input: object
output: keys and values as separate arrays
*/

function keysAndValues(data){
    let keys = []
    let values = []

    for(const property in data){
        keys.push(property)
        values.push(data[property])
    }
    return [keys,values]
}

console.log(keysAndValues({a: 1, b:2, c:3}))    // ["a","b","c"], [1,2,3]