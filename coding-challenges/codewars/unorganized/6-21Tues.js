// Get all array elements except those with specified indexes   KYU 6
//  returns all elements except those with the indexes passed in as param
//  should accept either an arrary or a single integer as param
//  Parmeters:  array or single integer.. ever be an empty array?
//  Return: return an array.. modify the og array?
//  Example:
// const arr = ['a','b','c','d','e']
// const arr2 = arr.except ([1,3])   //  ['a','c','e']
// console.log(arr2);
//  PseudoCode:
// filter out values with the specified indices
// return filtered arr

Array.prototype.except = function (keys) {
  if (Array.isArray(keys)) return this.filter((e, i) => !keys.includes(i));
  else return this.filter((e, i) => i != keys);
};

//  Least Larger   KYU 7
// return either index of smallest number that is larger than the elment at the given index, or -1 if doesnt exist.... or Nothing if empty
//  Parmeters:  given an array of numbers, and an integer.. is the iunteger always going to be positive? ..
//  Return:
//  Example:
console.log(leastLarger([4, 1, 3, 5, 6], 0)); // 3
console.log(leastLarger([4, 1, 3, 5, 6], 4)); // -1

//  PseudoCode:
// find the element at the given index (i)
// filter the array based on elements larger than e[i]
// if filtered arr is empty, return -1
// else return min of filtered

function leastLarger(a, i) {
  const comp = a[i];
  const arrFiltered = a.filter((e) => e > comp);
  return arrFiltered.length > 0 ? a.indexOf(Math.min(...arrFiltered)) : -1;
}
