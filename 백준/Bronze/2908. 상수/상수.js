const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

const reverse_a = parseInt(a.split("").reverse().join(""));
const reverse_b = parseInt(b.split("").reverse().join(""));

const answer = reverse_a > reverse_b ? reverse_a : reverse_b;

console.log(answer);
