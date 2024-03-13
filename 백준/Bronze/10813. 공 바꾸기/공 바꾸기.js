const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = Array.from({length: N}, (_, index) => index + 1);

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    const temp = arr[a-1];
    arr[a-1] = arr[b-1];
    arr[b-1] = temp;
}

console.log(arr.join(" "));