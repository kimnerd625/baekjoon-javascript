const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = new Array(30).fill(0);

while (input.length !== 0) {
    const t = parseInt(input.shift());
    arr[t-1] = 1;
}

const new_arr = arr.map((e, index) => e === 0 ? index + 1 : null).filter(e => e !== null);

console.log(new_arr[0]);
console.log(new_arr[1]);