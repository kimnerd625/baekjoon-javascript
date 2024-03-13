const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const S = input[0].split("");

const i = parseInt(input[1]);

console.log(S[i-1]);
