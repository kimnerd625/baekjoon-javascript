const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr_1 = [];
const arr_2 = [];
const result_arr = Array.from({ length: n }, () => new Array(m).fill(0)); // 수정: m -> n, n -> m

// 첫 번째 행렬 채우기
for (let i = 1; i <= n; i++) {
    arr_1.push(input[i].split(" ").map(Number));        
}

// 두 번째 행렬 채우기 (인덱스 조정 필요)
for (let i = 1 + n; i <= 2 * n; i++) { // 수정: 올바른 시작 인덱스
    arr_2.push(input[i].split(" ").map(Number));         
}

// 행렬 더하기
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        result_arr[i][j] = arr_1[i][j] + arr_2[i][j];
    }
}

console.log(result_arr.map(row => row.join(" ")).join("\n"));