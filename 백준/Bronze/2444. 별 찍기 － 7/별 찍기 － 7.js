/*
2n-1 1
2n-1 5

*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);

for (let i = 1; i <= n; i++) {
    const front = " ".repeat(n-i);
    const mid = "*".repeat(2*i-1);
    console.log(`${front}${mid}`);
}

for (let i = n-1; i >= 1; i--) {
    const front = " ".repeat(n-i);
    const mid = "*".repeat(2*i-1);
    console.log(`${front}${mid}`);
}
