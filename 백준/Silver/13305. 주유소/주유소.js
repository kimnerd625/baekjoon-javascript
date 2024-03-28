const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
const dist = input[1].split(" ").map(Number);
const price = input[2].split(" ").map(Number);

let answer = 0;
let min_price = price[0];

for (let i = 0; i < n - 1; i++) {
    if (price[i] < min_price) {
        min_price = price[i];
    }
    answer += min_price * dist[i];
}

console.log(answer);