const s = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
let n = 0;
let sum = 0;

while (sum <= s) {
    n += 1;
    sum += n;
}

console.log(n - 1);