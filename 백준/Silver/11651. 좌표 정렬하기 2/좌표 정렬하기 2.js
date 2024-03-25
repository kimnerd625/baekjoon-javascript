const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let arr = input.map((el) => el.split(" ").map(Number));

let answer = arr.sort((a, b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
}).map((el) => el.join(" ")).join("\n");

console.log(answer);