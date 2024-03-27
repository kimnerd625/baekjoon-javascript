let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = 0;
let [n, k] = input.shift().split(" ").map(Number);

input = input.map(Number).sort((a, b) => b - a);

while (k !== 0) {
    let temp = input.shift();
    if (temp <= k) {
        let c = parseInt(k / temp);
        k = k % temp;
        answer += c;
    }
}

console.log(answer);