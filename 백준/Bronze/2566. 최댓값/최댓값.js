const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = [];

input.forEach(line => {
    arr.push(line.trim().split(" ").map(Number));
});

let max_val = 0;
let axis_arr = [1, 1];

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (arr[i][j] > max_val) {
            max_val = arr[i][j];
            axis_arr = [i + 1, j + 1];
        }
    }
}

console.log(max_val);
console.log(axis_arr.join(" "));