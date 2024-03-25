const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);
let answer = [];

for (let i = 1; i <= n; i ++) {
    answer.push(input[i].split(" ").map(Number));
}

answer = answer.sort((a, b) => {
    if (a[0] === b[0]) {
        return a[1] - b[1];
    }
    return a[0] - b[0];
}).map((el) => el.join(" ")).join("\n");

console.log(answer);