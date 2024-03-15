const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = [];
let max_length = 0;
const answer = [];

while (input.length !== 0) {
    const line = input.shift();
    if (line.length > max_length) {
        max_length = line.length;
    }
    arr.push(line.split(""));
}

for (let j = 0; j < max_length; j++) {
    for (let i = 0; i < 5; i++) {
        answer.push(arr[i][j]);
    }
} 

console.log(answer.join(""));