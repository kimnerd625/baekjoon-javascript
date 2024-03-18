const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const card_arr = input[1].split(" ").map(Number);

let answer = 0;

for (let i = 0; i < n-2; i++) {
    for (let j = i+1; j < n-1; j++) {
        for (let k = j+1; k < n; k++) {
            const temp = card_arr[i] + card_arr[j] + card_arr[k]
            if (temp <= m && temp > answer) {
                answer = temp;
            }                
        }
    }
}

console.log(answer);