const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const black = [1, 1, 2, 2, 2, 8];

const result = black.map((element, index) => element - input[index]);

console.log(result.join(" "));