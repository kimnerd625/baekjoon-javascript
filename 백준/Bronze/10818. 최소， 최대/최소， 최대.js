const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

const max_val = arr.reduce((a, b) => a > b? a : b);
const min_val = arr.reduce((a, b) => a < b? a : b);

console.log(`${min_val} ${max_val}`);