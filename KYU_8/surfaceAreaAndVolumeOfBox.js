function getSize(width, height, depth) {
    let area = 2 * width * height + 2 * width * depth + 2 * height * depth;
    let volume = width * height * depth;
    return [area, volume];
}

console.log(getSize(4, 2, 6), [88, 48]);
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6)[0], 88);
console.log(getSize(4, 2, 6)[1], 48);
