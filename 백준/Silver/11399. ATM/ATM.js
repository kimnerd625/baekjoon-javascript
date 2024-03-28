const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(input.shift());

let line = input[0].split(" ").map(Number).sort((a, b) => a - b);

let answer = line.reduce((acc, el, index) => acc + el * (n - index), 0);

console.log(answer);