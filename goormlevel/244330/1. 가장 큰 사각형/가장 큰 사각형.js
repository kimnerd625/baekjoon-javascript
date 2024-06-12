const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const t_case = input.shift();

let size_arr = input.map((el) => el.split(" ").map(Number).reduce((a, b) => a * b));

console.log(Math.max(...size_arr));