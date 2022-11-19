var encryptThis = function (text) {
    let arr = text.split("");
    arr[0] = arr[0].charCodeAt();

    [arr[1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[1]];
    return arr.join("");
};

console.log(encryptThis("Hello"), "72olle");
console.log(encryptThis("good"), "103doo");
console.log(encryptThis("hello world"), "104olle 119drlo");
