/*
    input: array of integers
    - find max product obtained by multiplying 2 adjacent integers

    arr.length >=2
    numbers ay be negative or 0

    pseudo:
    - iterate through array, multiply each num by next num
    - new arr of products
    - return  max product

*/
console.log(adjacentElementsProduct([1, 2, 3])); // 6
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50

function adjacentElementsProduct(array) {
    let products = [];
    for (let i = 0; i < array.length - 1; i++) {
        products.push(array[i] * array[i + 1]);
    }
    return Math.max(...products);
}
