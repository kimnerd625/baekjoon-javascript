const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

let arr = input.map((el) => el.split(" "));

let answer = arr.sort((a, b) => parseInt(a[0]) - parseInt(b[0])).map((el) => el.join(" ")).join("\n");

console.log(answer);