/* classed on built in Array object
square() copy of array containing all values squared
cube()  copy all val cubed
average()   avg of all arr values .. if empty return NaN
sum()   sum of all vals
even()  return arr of all even nums
odd()   return arr all odds

Dont mutate orig arr

always arr of just nums.. could be empty. 
if empty return 0 except NaN for avg
*/

const nums = [1, 2, 3, 4, 5];

Array.prototype.square = function () {
    return this.map((num) => num ** 2);
};

Array.prototype.cube = function () {
    return this.map((num) => num ** 3);
};

Array.prototype.average = function () {
    if (this.length < 1) return NaN;
    else {
        return this.reduce((acc, cur) => acc + cur) / this.length;
    }
};
Array.prototype.sum = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};

Array.prototype.even = function () {
    return this.filter((num) => num % 2 === 0);
};

Array.prototype.odd = function () {
    return this.filter((num) => num % 2 !== 0);
};

// test cases
console.log(nums.square()); // [1,4,9,16,25]
console.log(nums.cube()); //  [1,8,27,64,125]
console.log(nums.average()); //   15
console.log(nums.sum()); //   3
console.log(nums.even()); //  [2,4]
console.log(nums.odd()); //   [1,3,5]

// not mutated
console.log(nums); // [1,2,3,4,5]
