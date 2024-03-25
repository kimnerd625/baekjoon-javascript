const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

console.log(input.reduce((a, b) => a + b, 0) / 5);
console.log(input.sort((a, b) => a - b)[2]);