//  String Reordering KYU 7

/*

order objects by property value

    input: array of dictionaries (objects)
    output: string
*/
/*  PSEUDO
    - order object properties by their keys (ascending order)
    - map arr -> Object.entries (turn each object into an array)
    - sort array by arr[0]
    - create string from values
       
*/

// function sentence(List) {
//     let arr =  List.map(obj => Object.entries(obj)).flat().sort((a,b) => a[0] - b[0])
//     let str = arr.map(array => array[1]).join(" ")
//     return str
// }

function sentence(List) {
    return List.sort((a, b) => Object.keys(a) - Object.keys(b))
        .map((obj) => Object.values(obj))
        .join(" ");
}

let List = [
    { 4: "dog" },
    { 2: "took" },
    { 3: "his" },
    { "-2": "Vatsan" },
    { 5: "for" },
    { 6: "a" },
    { 12: "spin" },
];

console.log(sentence(List)); // 'Vatsan took his dog for a spin'
