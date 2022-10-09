/*  Day 2 Sun. 10.9.22

    2 functions:
        - 1 that swaps given primitive value in a given 1-d array to an index to the left
        - same but swaps it to the right

        - if value is on edge of array and cant move in that direction, dont move it
        - argument arr should be mutated

    PARAM: array,  primitive value inside Arr
    RETURN: mutated array 

    PSEUDO
        - check if item is at "end" off array
            - shiftRight: last item in arr
            - shiftLeft: first item in arr
            - if yes, return og arr, if not continue
        - swap arr[indexOf(item)] with item on other side

        better solution??:
            - 
*/

const shiftLeft = (arr, item) => {
    if(arr.indexOf(item) === 0) return arr
    else{
        let itemIndex = arr.indexOf(item)
        let swappedValue = arr[itemIndex - 1]
        arr[itemIndex] = swappedValue
        arr[itemIndex - 1] = item
        return arr
    }
}

const shiftRight = (arr, item) => {
    if(arr.indexOf(item) === arr.length - 1)  return arr
    else{
        let itemIndex = arr.indexOf(item)
        let swappedValue = arr[itemIndex + 1]
        arr[itemIndex] = swappedValue
        arr[itemIndex + 1] = item
        return arr
    }
}


const myArray = ['abc', 'xyz', 1, 2, 'Hey!']
console.log(myArray)

shiftLeft(myArray, "xyz")
// call move left function with 'xyz' and myArray as arguments
console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

shiftLeft(myArray, "xyz")
// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

shiftRight(myArray, 2)
// call move right function this time, with 2 and myArray as arguments
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

shiftRight(myArray, 2)
// call move right function again, same arguments
// Note that 2 is already as far right as it can go
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change
