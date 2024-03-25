const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

input.shift();

let answer = input.sort((a, b) => a - b);

console.log(answer.join("\n"));
