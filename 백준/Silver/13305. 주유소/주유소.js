const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const dist = input[1].split(" ").map(el => BigInt(el));
const price = input[2].split(" ").map(el => BigInt(el));

let answer = 0n; // BigInt 타입으로 초기화
let min_price = price[0];

for (let i = 0; i < n - 1; i++) {
    if (price[i] < min_price) {
        min_price = price[i];
    }
    answer += min_price * dist[i]; // 여기서의 연산도 모두 BigInt 연산
}

console.log(answer.toString()); // BigInt를 문자열로 변환하여 출력