const [a, b, c] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let new_arr = [a, b, c].sort((a, b) => a - b);

if (new_arr[0] + new_arr[1] > new_arr[2]) {
    console.log(new_arr[0] + new_arr[1] + new_arr[2]);
} else {
    console.log(2 * (new_arr[0] + new_arr[1]) - 1);
}

console.log();