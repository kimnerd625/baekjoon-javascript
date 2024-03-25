const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
let arr = input[1].split(" ").map(Number);

let arr_compare = Array.from(new Set(arr)).sort((a, b) => a - b);

// 좌표 압축 결과를 보다 효율적으로 찾기 위해, 값을 키로 하고 압축된 좌표를 값으로 하는 객체 생성
let compress = {};
arr_compare.forEach((el, index) => {
  compress[el] = index;
});

// arr 배열의 각 원소를 압축된 좌표로 매핑
arr = arr.map((el) => compress[el]);

console.log(arr.join(" "));