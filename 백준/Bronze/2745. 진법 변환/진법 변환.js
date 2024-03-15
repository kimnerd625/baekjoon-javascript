/*
출력: B진법 수 N을 10진법으로 출력
*/

const [n, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(parseInt(n, b));