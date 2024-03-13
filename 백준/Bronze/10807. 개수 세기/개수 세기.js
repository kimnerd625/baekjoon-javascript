const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const c = parseInt(input[0]); // 배열에 들어 있는 원소 갯수
const arr = input[1].split(" ").map(Number); // 배열
const target = parseInt(input[2]) // 배열에서 찾아야 하는 원소

const count = arr.filter(element => element === target).length; // filter 함수, length 함수 활용

console.log(count);