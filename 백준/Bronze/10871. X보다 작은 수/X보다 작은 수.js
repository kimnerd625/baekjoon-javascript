const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const new_arr = arr.filter(e => e < x);

console.log(new_arr.join(" "));