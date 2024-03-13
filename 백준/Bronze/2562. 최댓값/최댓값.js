const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const max_val = input.reduce((a, b) => a > b ? a : b);
const max_val_index = input.indexOf(max_val);

console.log(max_val);
console.log(max_val_index + 1);