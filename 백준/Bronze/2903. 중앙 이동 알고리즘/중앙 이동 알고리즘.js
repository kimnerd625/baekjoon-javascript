const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const answer = ((2 ** parseInt(n) + 1) ** 2);

console.log(answer);