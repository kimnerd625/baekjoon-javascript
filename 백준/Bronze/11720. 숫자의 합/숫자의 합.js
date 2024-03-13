const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = input[1].split("").map(Number).reduce((a, b) => a + b, 0);

console.log(answer);