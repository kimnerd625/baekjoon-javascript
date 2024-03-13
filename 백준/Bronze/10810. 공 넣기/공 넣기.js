const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = new Array(n).fill(0);

for (let i = 1; i <= m; i++) {
    const [start, end, value] = input[i].split(" ").map(Number);
    for (let j = start - 1; j <= end - 1; j++) {
        arr[j] = value;
    }
}

console.log(arr.join(" "));