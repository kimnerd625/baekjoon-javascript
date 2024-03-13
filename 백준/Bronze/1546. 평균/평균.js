const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

const max_score = input[1].split(" ").map(Number).reduce((a, b) => a > b ? a : b);

const new_arr = input[1].split(" ").map(Number).map((e) => e / max_score * 100);

const sum = new_arr.reduce((a, b) => a + b, 0);

console.log(sum / n);