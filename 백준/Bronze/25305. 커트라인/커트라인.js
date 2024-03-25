const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n , k] = input[0].split(" ").map(Number);

let arr = input[1].split(" ").map(Number).sort((a, b) => b - a)[k-1];

console.log(arr);