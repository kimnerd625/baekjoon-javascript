const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let arr = Array.from({length: n}, (_, index) => index + 1);

for (let i = 1; i <= m; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    const front = arr.slice(0, start-1); 
    const mid = arr.slice(start-1, end).reverse();
    const back = arr.slice(end, n);
    arr = [...front, ...mid, ...back];
}

console.log(arr.join(" "));